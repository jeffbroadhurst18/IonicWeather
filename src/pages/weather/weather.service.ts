import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherService {
    constructor(private http: Http) { }

    getLocations() {
        let weatherUrl = 'http://datapoint.metoffice.gov.uk/public/data/txt/wxfcs/regionalforecast/json/sitelist?key=fb4c0ad5-6ba6-4068-bbcd-c5a2788e8265';
        return this.http.get(weatherUrl).map((res: Response) => res.json());
    }

    getWeather(loc : string)
    {
        let weatherUrl = 'http://datapoint.metoffice.gov.uk/public/data/txt/wxfcs/regionalforecast/json/' + loc + '?key=fb4c0ad5-6ba6-4068-bbcd-c5a2788e8265';
        return this.http.get(weatherUrl).map((res: Response) => res.json());
    }
}