import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Action, ActionReducer, StoreModule } from '@ngrx/store';
import { CitiesReducer } from './cities/cities.reducers';
import { State } from './state';
import { WeatherForecastServicesModule } from '@bp/weather-forecast/services';
import { EffectsModule } from '@ngrx/effects';
import { CitiesEffects } from './cities/cities.effects';
type statewithReducers<T>={
	[K in keyof T]: ActionReducer<T[K],Action>
}
const state:statewithReducers<State>={
	cities:CitiesReducer
}

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		WeatherForecastServicesModule,
		StoreModule.forRoot(state),
		EffectsModule.forRoot([
			CitiesEffects
		])
	],
	exports:[StoreModule]
})
export class StateModule { }
