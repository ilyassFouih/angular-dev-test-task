import { createAction, props } from "@ngrx/store";
import {  ForecatsWeatherModel } from "@weather-forcast/core/models";
import { loadWeatherDTO } from "./forecast-weather.state";

export enum FORECAST_ACTIONS_TYPE{
	laodWather="[search] search forecast weather",
	ErrorForecast="[API] error in feetching forecast",
	FoundNewForecast="[API] found new forecast"
}


export const LoadForecastAction=createAction(FORECAST_ACTIONS_TYPE.laodWather,props<loadWeatherDTO>())
export const isErrorForecastAction=createAction(FORECAST_ACTIONS_TYPE.ErrorForecast)
export const foundNewForecast=createAction(FORECAST_ACTIONS_TYPE.FoundNewForecast,props<ForecatsWeatherModel>())