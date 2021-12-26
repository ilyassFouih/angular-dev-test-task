import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Action, ActionReducer, StoreModule } from '@ngrx/store';
import { CitiesReducer } from './cities/cities.reducers';
import { State } from './state';
import { WeatherForecastServicesModule } from '@bp/weather-forecast/services';
import { EffectsModule } from '@ngrx/effects';
import { CitiesEffects } from './cities/cities.effects';
import { alertReducers } from './alert/alert.reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../environments/environment';
type statewithReducers<T>={
	[K in keyof T]: ActionReducer<T[K],Action>
}
const state:statewithReducers<State>={
	cities:CitiesReducer,
	alert:alertReducers
}

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		WeatherForecastServicesModule,
		StoreModule.forRoot(state),
		EffectsModule.forRoot([
			CitiesEffects
		]),
		StoreDevtoolsModule.instrument({
			maxAge: 25, // Retains last 25 states
			logOnly: environment.production, // Restrict extension to log-only mode
			autoPause: true, // Pauses recording actions and state changes when the extension window is not open
		  }),
	],
	exports:[StoreModule]
})
export class StateModule { }
