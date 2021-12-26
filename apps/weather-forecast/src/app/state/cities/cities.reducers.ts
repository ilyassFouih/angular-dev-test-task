import { createReducer, on } from "@ngrx/store";
import { searchForCity ,newCities, isError, noCityFound} from "./cities.actions";
import { CitiesState, CitiesStateStatus } from "./cities.state";

export const initCitiesState:CitiesState={
	cities:[],
	errorMsg:"",
	status:CitiesStateStatus.INIT
}
export const CitiesReducer=createReducer(
	initCitiesState,
	on(searchForCity,(state,{cityName})=>({ 
		...state,
		status:CitiesStateStatus.LOADING,
		cities:[]
	})),
	on(newCities,((state,{cities})=>({
		...state,
		cities,
		status:CitiesStateStatus.SUCCESS,
	}))),
	on(noCityFound,(state=>({
		...state,
		cities:[],
		errorMsg:"No city found with the provided city name",
		status:CitiesStateStatus.SUCCESS,
	}))),
	on(isError,((state,{errorMessage})=>({
		...state,
		status:CitiesStateStatus.ERROR,
		errorMsg:errorMessage
	})))

)


