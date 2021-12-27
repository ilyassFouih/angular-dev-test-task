import { AlertState } from "./alert/alert.state.model";
import { CityState } from "./cities/city.state";
import { ForecastWeatherState } from "./forecast-weather/forecast-weather.state";

export interface State{
	city:CityState,
	alert:AlertState
	weather:ForecastWeatherState
}