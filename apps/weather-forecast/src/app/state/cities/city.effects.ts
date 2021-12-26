import { Injectable } from "@angular/core";
import { WeatherForecastApiService } from "@bp/weather-forecast/services";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, from, map, mergeMap } from "rxjs";
import { newAlertError } from "../alert/alert.actions";
import { CitiesActionsType, noCityFound, newCityAction, isCityError} from "./city.actions"
@Injectable()
export class CitiesEffects{

	loadCities$=createEffect(
		()=>this.actions$.pipe(
			ofType(CitiesActionsType.search),
			mergeMap(({cityName})=>this.forecastService
				.searchForCityByName(cityName)
				.pipe(
					map(newCities=>{
						const cities=newCities?newCities:[]
						if(cities.length==0)
							return noCityFound()
						else return  newCityAction({cities})
					}),
					catchError(error=>from([
						newAlertError({title:"Ops Error in feetching cities",message:"Please try again later"}),
						isCityError()
					]))
				))
		)
	)

	constructor(
		private forecastService:WeatherForecastApiService,
		private actions$:Actions,
	){}
}