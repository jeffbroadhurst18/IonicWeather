import { Component } from '@angular/core';
import { WeatherService } from './weather.service';
import { Location } from './location';

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
    id :string;
    forecasts : string[];

    ngOnInit(): void {
        this.weatherService.getLocations().subscribe(data => { this.processLocs(data) })
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
        this.newLocation = "Jeff " + bits[1];
        this.weatherService.getWeather(bits[1].replace(' ','')).subscribe(data=> { this.processWeather(data) })
    }

    processWeather(weather : any)
    {
        this.id = weather.RegionalFcst.FcstPeriods.Period[0].id;
        this.forecasts = [];
        for (var i=0; i<3; i++)
        {
            this.forecasts.push(weather.RegionalFcst.FcstPeriods.Period[0].Paragraph[i].$);
        }
    }




}


