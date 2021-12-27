import { createAction, props } from "@ngrx/store";

export enum AlertActionsType{
	newError="new error message",
	newInfo="new info message"
}
export const newAlertError=createAction(AlertActionsType.newError,props<{title:string,message:string}>())
export const newAlertInfo=createAction(AlertActionsType.newInfo,props<{title:string,message:string}>())