import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CitiesModel, FORECAST_TYPE,ForecatsWeatherModel} from "@weather-forcast/core/models";

const BASE_URL_CITY="https://api.openweathermap.org/geo/1.0/direct"
const BASE_URL_FORECAST="https://api.openweathermap.org/data/2.5/onecall"

@Injectable()
export class WeatherForecastApiService {
	private _apiKey = '010721642521f31b0fbc8c3831d45951';

	constructor(private httpClient:HttpClient){

	}

	searchForCityByName(cityName:string){
		return this.httpClient
			.get<CitiesModel[]>(`${BASE_URL_CITY}?q=${cityName}&limit=1&appid=${this._apiKey}`)
	}

	weatherByLongAndLat(lon:number,lat:number,typeWeather:FORECAST_TYPE){
		const toExclud=typeWeather==FORECAST_TYPE.DAILY?FORECAST_TYPE.HOURLY:FORECAST_TYPE.DAILY
		const typeWeatherMin=toExclud.toLowerCase()
		return this.httpClient
			.get<ForecatsWeatherModel>(`${BASE_URL_FORECAST}?lat=${lat}&lon=${lon}&exclude=minutely,${typeWeatherMin},alerts&appid=${this._apiKey}`)
	}

}