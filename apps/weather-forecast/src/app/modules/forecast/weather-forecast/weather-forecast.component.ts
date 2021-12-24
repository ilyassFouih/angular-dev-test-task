import { Component } from '@angular/core';
import {  Observable, of } from 'rxjs';
import { CitiesModel } from "@weather-forcast/core/models"
import { CITIES_MOCKS } from '@weather-forcast/core/mocks/cities.mocks';
@Component({
	selector: 'bp-weather-forecast',
	templateUrl: './weather-forecast.component.html',
	styleUrls: ['./weather-forecast.component.css']
})
export class WeatherForecastComponent{

	selected:string=null
	cities$:Observable<CitiesModel[]>=of(CITIES_MOCKS)
}
