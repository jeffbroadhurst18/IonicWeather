import { Component } from '@angular/core';
import { WeatherService } from './weather.service';
import { Forecast } from './forecast';
import { Location } from './location';
import * as moment from 'moment';

@Component({
    selector: 'page-weather',
    templateUrl: 'weather.html',
    providers: [WeatherService],
})
export class WeatherPage {

    constructor(private weatherService: WeatherService) { }

    locations: Location[] = [];

    selectedLocation: string;
    newLocation: string;
    id: string;
    forecasts: Forecast[];
    outlooks: Forecast[];
    todaysDate: string;
    issuedAt: string;

    ngOnInit(): void {
        this.weatherService.getLocations().subscribe(data => { this.processLocs(data) })
        this.todaysDate = moment().format('D MMM YYYY');
    };


    processLocs(locs: any): void {
        var nextLoc: Location;
        for (var i = 0; i < locs.Locations.Location.length; i++) {
            nextLoc = new Location();
            nextLoc.id = locs.Locations.Location[i]["@id"];
            nextLoc.name = locs.Locations.Location[i]["@name"];
            this.locations.push(nextLoc);
        }
    }

    onChange(newVal: string) {
        var bits = newVal.split(":");
        this.weatherService.getWeather(bits[1].replace(' ', '')).subscribe(data => { this.processWeather(data) })
    }

    processWeather(weather: any) {
        this.id = weather.RegionalFcst.FcstPeriods.Period[0].id;
        this.issuedAt = moment(weather.RegionalFcst.issuedAt).format('DD/MM/YYYY HH:mm');
        this.forecasts = [];
        this.outlooks = [];
        for (var i = 0; i < 3; i++) {
            let forecast: Forecast = new Forecast();
            forecast.$ = weather.RegionalFcst.FcstPeriods.Period[0].Paragraph[i].$;
            forecast.title = weather.RegionalFcst.FcstPeriods.Period[0].Paragraph[i].title;
            this.forecasts.push(forecast);
        }

        let outlook: Forecast = new Forecast();
        outlook.$ = weather.RegionalFcst.FcstPeriods.Period[1].Paragraph.$;
        outlook.title = weather.RegionalFcst.FcstPeriods.Period[1].Paragraph.title;
        this.outlooks.push(outlook);
    }




}


