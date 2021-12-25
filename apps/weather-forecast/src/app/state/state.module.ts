import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Action, ActionReducer, StoreModule } from '@ngrx/store';
import { CitiesReducer } from './cities/cities.reducers';
import { State } from './state';
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
		StoreModule.forRoot(state)
	],
	exports:[StoreModule]
})
export class StateModule { }
