import { createAction, props } from '@ngrx/store';
import { CitiesModel } from "@weather-forcast/core/models"
enum CitiesActionsType {
	search = '[searchForCity Component] searching for city',
	isError = '[API] Error in searching for city',
	newCitiesFound = '[API] new cities found',
}
export const searchForCity = createAction(CitiesActionsType.search, props<{ cityName: string }>());
export const isError = createAction(CitiesActionsType.isError,props<{errorMessage:string}>());
export const newCities = createAction(CitiesActionsType.newCitiesFound,props<{cities:CitiesModel[]}>());
