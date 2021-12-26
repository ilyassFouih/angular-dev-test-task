import { createReducer, on } from "@ngrx/store";
import { searchForCity ,newCityAction, noCityFound, isCityError} from "./city.actions";
import {  CitiesStateStatus, CityState } from "./city.state";

export const initCityState:CityState={
	city:null,
	errorMsg:"",
	status:CitiesStateStatus.INIT
}
export const cityReducer=createReducer(
	initCityState,
	on(searchForCity,(state,{cityName})=>({ 
		...state,
		status:CitiesStateStatus.LOADING,
	})),
	on(newCityAction,((state,{city})=>({
		...state,
		city,
		status:CitiesStateStatus.SUCCESS,
	}))),
	on(noCityFound,(state=>({
		...state,
		city:null,
		errorMsg:"No city found with the provided city name",
		status:CitiesStateStatus.NO_CITY_FOUND,
	}))),
	on(isCityError,(state=>({
		...state,
		status:CitiesStateStatus.INIT,
		city:null
	})))

)


