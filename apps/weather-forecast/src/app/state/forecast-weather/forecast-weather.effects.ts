import { Injectable } from "@angular/core";
import { WeatherForecastApiService } from "@bp/weather-forecast/services";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, from, map, mergeMap } from "rxjs";
import { newAlertError } from "../alert/alert.actions";
import { FORECAST_ACTIONS_TYPE, foundNewForecast, isErrorForecastAction } from "./forecast-weather.actions";
import {loadWeatherDTO} from "./forecast-weather.state"
@Injectable()
export class ForecastWeatherEffect{

	feetchWeather$=createEffect(()=>this.actions
		.pipe(
			ofType(FORECAST_ACTIONS_TYPE.laodWather),
			mergeMap((dto:loadWeatherDTO)=>this.weatherService
				.weatherByLongAndLat(dto.lon,dto.lat,dto.typeWeather)
				.pipe(
					map(result=> foundNewForecast(result)),
					catchError(error=>from([
						isErrorForecastAction(),
						newAlertError({title:"Ops error server",message:"An error oucurred while feetching weather. pleasetry again later"})
					]))
				))

		))

	constructor(
		private actions:Actions,
		private weatherService:WeatherForecastApiService
	){}
}