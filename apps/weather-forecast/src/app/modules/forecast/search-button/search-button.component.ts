import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { FORECAST_TYPE } from '@weather-forcast/core/models';
import { selectCityState, selectFoundCities } from '@weather-forcast/state/cities/city.selectors';
import { LoadForecastAction } from '@weather-forcast/state/forecast-weather/forecast-weather.actions';
import { State } from '@weather-forcast/state/state';
import { combineLatest, map, Observable, take, tap } from 'rxjs';

@Component({
	selector: 'bp-search-button',
	templateUrl: './search-button.component.html',
	styleUrls: ['./search-button.component.css'],
})
export class SearchButtonComponent implements OnInit {
	disabled$: Observable<boolean> = null;
	constructor(private activatedRoute: ActivatedRoute, private store: Store<State>) {}

	ngOnInit() {
		const foundCity$ = this.store.select(selectCityState);
		const forcastType$ = this.activatedRoute.queryParams.pipe(map(q => q.forecastType as string));
		this.disabled$ = combineLatest([foundCity$, forcastType$]).pipe(
			map(([foundCity, type]) => !foundCity.city || !type)
		);
	}

	onSearch() {
		const foundCity$ = this.store.select(selectFoundCities);
		const forcastType$ = this.activatedRoute.queryParams.pipe(map(q => q.forecastType as FORECAST_TYPE));
		combineLatest([foundCity$, forcastType$])
			.pipe(
				tap(([foundCity,typeWeather])=>{
					const {lat,lon}=foundCity
					if(lat && lon && typeWeather)
						this.store.dispatch(LoadForecastAction({
							lat,
							lon,
							typeWeather
						}))
				}),
				take(1)
			).subscribe();
	}
}
