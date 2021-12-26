import { AlertState } from "./alert/alert.state.model";
import { CitiesState } from "./cities/cities.state";

export interface State{
	cities:CitiesState,
	alert:AlertState
}