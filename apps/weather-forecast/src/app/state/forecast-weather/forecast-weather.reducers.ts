import { createReducer, on } from "@ngrx/store";
import { LoadForecastAction, foundNewForecast, isErrorForecastAction } from "./forecast-weather.actions";
import { ForecastWeatherState, FORECAST_STATUS } from "./forecast-weather.state";

const initState:ForecastWeatherState={
	forecastWeather:null,
	status:FORECAST_STATUS.INIT
}
export const forecastWeatherReducers=createReducer(
	initState,
	on(LoadForecastAction,(state=>(
		{
			...state,
			forecastWeather:null,
			status:FORECAST_STATUS.LOADING
		}))),
	on(isErrorForecastAction,(state=>(
		{
			...state,
			forecastWeather:null,
			status:FORECAST_STATUS.ERROR
		}))),
	on(foundNewForecast,((state,forecast)=>(
		{
			...state,
			forecastWeather:forecast,
			status:FORECAST_STATUS.SUCCES
		}))),
)