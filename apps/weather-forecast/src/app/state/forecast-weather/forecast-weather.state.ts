import { FORECAST_TYPE, ForecatsWeatherModel } from "@weather-forcast/core/models";
export enum FORECAST_STATUS{
	LOADING,
	SUCCES,
	ERROR,
	INIT
}
export interface ForecastWeatherState{
	forecastWeather:ForecatsWeatherModel
	status:FORECAST_STATUS
}
export type loadWeatherDTO={
	lon:number
	lat:number
	typeWeather:FORECAST_TYPE
}