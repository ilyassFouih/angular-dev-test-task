import { createReducer, on } from "@ngrx/store";
import { searchForCity ,newCities, noCityFound, isCityError} from "./cities.actions";
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
		status:CitiesStateStatus.NO_CITY_FOUND,
	}))),
	on(isCityError,(state=>({
		...state,
		status:CitiesStateStatus.INIT,
		cities:[]
	})))

)


