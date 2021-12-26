import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectIsLoadingForecast } from '@weather-forcast/state/forecast-weather/forecast-weather.selectors';
import { State } from '@weather-forcast/state/state';
import { Observable } from 'rxjs';

@Component({
	selector: 'bp-forecast-result-table',
	templateUrl: './forecast-result-table.component.html',
	styleUrls: ['./forecast-result-table.component.css']
})
export class ForecastResultTableComponent  {

	isLoading$:Observable<boolean>=this.store.select(selectIsLoadingForecast)

	constructor(private store:Store<State>){}

}
