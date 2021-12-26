import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { CitiesModel } from '@weather-forcast/core/models';
import { map, Observable, tap } from 'rxjs';
import { searchForCity, newCities } from '@weather-forcast/state/cities/cities.actions';
import { State } from '@weather-forcast/state/state';
import { isLoadingCities, selectFoundCities } from '@weather-forcast/state/cities/cities.selectors';

@Component({
	selector: 'bp-search-for-city',
	templateUrl: './search-for-city.component.html',
	styleUrls: ['./search-for-city.component.css'],
})
export class SearchForCityComponent implements OnInit {
	cities$: Observable<CitiesModel[]>=this.store.select(selectFoundCities)
	isLoadingCities$:Observable<boolean>=this.store.select(isLoadingCities)
	searchText$: Observable<string>;

	constructor(
		private activatedRoute: ActivatedRoute, 
		private router: Router, 
		private store: Store<State>
	) {}

	ngOnInit(): void {
		this.searchText$ = this.activatedRoute.queryParams.pipe(
			map(item => item.cityName),
			tap(cityName => {
				const dispatchSearchOrnew=cityName?searchForCity({ cityName }):newCities({ cities: []})
				this.store.dispatch(dispatchSearchOrnew);
			})
		);
	}

	onSearchCityChanged(cityName: string) {
		this.router.navigate([], { queryParams: { cityName } });
	}
}
