import { Injectable } from "@angular/core";
import { WeatherForecastApiService } from "@bp/weather-forecast/services";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of } from "rxjs";
import { CitiesActionsType } from "./cities.actions"
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
							return {type:CitiesActionsType.noCityFound}
						else return  {type:CitiesActionsType.newCitiesFound,cities}
					}),
					catchError(error=>of({type:CitiesActionsType.isError,errorMessage:"Ops Error in loading cities, please try again later"}))
				))
		)
	)

	constructor(
		private forecastService:WeatherForecastApiService,
		private actions$:Actions,
	){}
}