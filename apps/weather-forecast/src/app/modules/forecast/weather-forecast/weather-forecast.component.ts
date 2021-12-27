import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { FORECAST_TYPE } from '@weather-forcast/core/models';
import { selectFoundCities } from '@weather-forcast/state/cities/city.selectors';
import { LoadForecastAction } from '@weather-forcast/state/forecast-weather/forecast-weather.actions';
import { State } from '@weather-forcast/state/state';
import { combineLatest, filter, map, Subscription } from 'rxjs';
@Component({
	selector: 'bp-weather-forecast',
	templateUrl: './weather-forecast.component.html',
	styleUrls: ['./weather-forecast.component.css'],
})
export class WeatherForecastComponent implements OnInit, OnDestroy {
	subscriptions: Subscription = new Subscription();
	constructor(private store: Store<State>, private activatedRoute: ActivatedRoute) {}
	ngOnDestroy(): void {
		this.subscriptions.unsubscribe();
	}
	ngOnInit() {
		const forecastType$ = this.activatedRoute.queryParams.pipe(map(q => q.forecastType as FORECAST_TYPE));
		const foundCity$ = this.store.select(selectFoundCities);
		const sub = combineLatest([forecastType$, foundCity$])
			.pipe(
				filter(([type, city]) => !!type && !!city),
				map(([type, city]) => ({ lat: city.lat, lon: city.lon, typeWeather: type }))
			)
			.subscribe(dto => this.store.dispatch(LoadForecastAction(dto)));
		this.subscriptions.add(sub);
	}
}
