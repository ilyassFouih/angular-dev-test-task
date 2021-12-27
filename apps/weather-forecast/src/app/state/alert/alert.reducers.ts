import { createReducer, on } from "@ngrx/store";
import { newAlertError, newAlertInfo } from "./alert.actions";
import { AlertState } from "./alert.state.model";

const initAlertState:AlertState={
	message:null,
	title:null,
	type:null
}
export const alertReducers=createReducer(
	initAlertState,
	on(newAlertError,(state,{title,message})=>({
		...state,
		message,
		title,
		type:"danger"
	})),
	on(newAlertInfo,(state,{title,message})=>({
		...state,
		message,
		title,
		type:"info"
	})),
)