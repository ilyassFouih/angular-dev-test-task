import { createSelector } from "@ngrx/store";
import { State } from "../state";
import { ForecastWeatherState, FORECAST_STATUS } from "./forecast-weather.state";

export const selectWeatherForecast=createSelector(
	(appState:State)=>appState.weather,
	(weather:ForecastWeatherState)=>weather.forecastWeather
)
export const selectIsLoadingForecast=createSelector(
	(appState:State)=>appState.weather,
	(weather:ForecastWeatherState)=>weather.status==FORECAST_STATUS.LOADING
)