import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { ForecastTableConfig, FORECAST_TYPE, ForecatsWeatherModel } from '@weather-forcast/core/models';
import { HoursPerDay } from '@weather-forcast/core/models/hours-per-day.enum';
import { WEEK_DAYS } from '@weather-forcast/core/models/week-days.enum';
import { selectFoundCities } from '@weather-forcast/state/cities/city.selectors';
import {
	selectIsLoadingForecast,
	selectWeatherForecast,
} from '@weather-forcast/state/forecast-weather/forecast-weather.selectors';
import { State } from '@weather-forcast/state/state';
import { combineLatest, filter, map, Observable, switchMap, take } from 'rxjs';

@Component({
	selector: 'bp-forecast-result-table',
	templateUrl: './forecast-result-table.component.html',
	styleUrls: ['./forecast-result-table.component.css'],
})
export class ForecastResultTableComponent implements OnInit {
	isLoading$: Observable<boolean> = this.store.select(selectIsLoadingForecast);
	forecasttableConfig$: Observable<ForecastTableConfig>;

	constructor(private store: Store<State>, private activatedRoute: ActivatedRoute) {}
	ngOnInit() {
		const typeForecast$ = this.activatedRoute.queryParams.pipe(map(q => q.forecastType as FORECAST_TYPE));
		const weatherForecast$ = this.store.select(selectWeatherForecast);
		const foundCity$ = this.store.select(selectFoundCities);

		this.forecasttableConfig$ = weatherForecast$.pipe(
			switchMap(_=>combineLatest([typeForecast$, weatherForecast$,foundCity$])
				.pipe(
					filter(([type,forecast,city])=>!!type && !!forecast && !!city),
					take(1),
					map(([type,forecast,city])=>({
						city:{
							country:city.country,
							name:city.name,
							tempValue:forecast.current.temp
						},
						tableType:type,
						tempColumns:this.getTempColumn(type,forecast),
					}))
				))
		)
		
		
	}
	getTempColumn(type: FORECAST_TYPE, forecast: ForecatsWeatherModel): { colValue: string; colTemp: number; }[] {
		if(type==FORECAST_TYPE.DAILY)
			return Object.values(WEEK_DAYS)
				.map((value,index)=>({
					colValue:value,
					colTemp:forecast.daily[index].temp.day
				}))
		else 
			return Object.values(HoursPerDay)
				.map((value,index)=>({
					colValue:value,
					colTemp:forecast.hourly[index].temp
				}))
	}
}
