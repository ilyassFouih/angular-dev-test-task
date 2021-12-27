import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectAlertMessage, selectAlertTitle, selectAlertType } from './state/alert/alert.selectors';
import { State } from './state/state';

@Component({
	selector: 'bp-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	type$=this.store.select(selectAlertType)
	title$:Observable<string>=this.store.select(selectAlertTitle)
	message$:Observable<string>=this.store.select(selectAlertMessage)

	constructor(
		private store:Store<State>
	){
	}
	
}
