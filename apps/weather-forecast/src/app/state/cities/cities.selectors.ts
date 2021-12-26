import { createSelector } from "@ngrx/store";
import { State } from "../state";
import { CitiesState, CitiesStateStatus } from "./cities.state";

export const selectFoundCities=createSelector(
	(appState:State)=>appState.cities,
	(state:CitiesState)=>state.cities,
)
export const isLoadingCities=createSelector(
	(appState:State)=>appState.cities,
	(state:CitiesState)=>state.status==CitiesStateStatus.LOADING,
)