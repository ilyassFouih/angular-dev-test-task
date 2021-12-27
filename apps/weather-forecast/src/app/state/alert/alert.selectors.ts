import { createSelector } from "@ngrx/store";
import { State } from "../state";

export const selectAlertTitle=createSelector(
	(appState:State)=>appState.alert,
	(state)=>state.title
)
export const selectAlertType=createSelector(
	(appState:State)=>appState.alert,
	(state)=>state.type
)
export const selectAlertMessage=createSelector(
	(appState:State)=>appState.alert,
	(state)=>state.message
)