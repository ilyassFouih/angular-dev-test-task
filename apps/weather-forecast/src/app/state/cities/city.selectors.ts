import { createSelector } from "@ngrx/store";
import { State } from "../state";
import { CityState, CitiesStateStatus } from "./city.state";

export const selectFoundCities=createSelector(
	(appState:State)=>appState.city,
	(state:CityState)=>state.city,
)
export const isLoadingCities=createSelector(
	(appState:State)=>appState.city,
	(state:CityState)=>state.status==CitiesStateStatus.LOADING,
)
export const noCityFoundSelector=createSelector(
	(appState:State)=>appState.city,
	(state:CityState)=>state.status==CitiesStateStatus.NO_CITY_FOUND,
)
export const selectCityState=createSelector(
	(appState:State)=>appState.city,
	(city:CityState)=>city,
)