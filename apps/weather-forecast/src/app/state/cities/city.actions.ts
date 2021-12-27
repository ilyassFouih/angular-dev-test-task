import { createAction, props } from '@ngrx/store';
import { CitiesModel } from "@weather-forcast/core/models"
export enum CitiesActionsType {
	search = '[searchForCity Component] searching for city',
	newCity = '[API] new cities found',
	noCityFound = '[API] No city found',
	isError = '[API] Error in feetch',
}
export const searchForCity = createAction(CitiesActionsType.search, props<{ cityName: string }>());
export const newCityAction = createAction(CitiesActionsType.newCity,props<{city:CitiesModel}>());
export const noCityFound = createAction(CitiesActionsType.noCityFound);
export const isCityError = createAction(CitiesActionsType.isError);
