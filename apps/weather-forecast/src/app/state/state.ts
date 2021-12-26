import { AlertState } from "./alert/alert.state.model";
import { CityState } from "./cities/city.state";

export interface State{
	city:CityState,
	alert:AlertState
}