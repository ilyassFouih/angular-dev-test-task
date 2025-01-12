import {  Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { CitiesModel } from '@weather-forcast/core/models';
import { distinctUntilChanged, map, Observable, tap } from 'rxjs';
import { searchForCity } from '@weather-forcast/state/cities/city.actions';
import { State } from '@weather-forcast/state/state';
import { isLoadingCities, noCityFoundSelector, selectFoundCities } from '@weather-forcast/state/cities/city.selectors';

@Component({
	selector: 'bp-search-for-city',
	templateUrl: './search-for-city.component.html',
	styleUrls: ['./search-for-city.component.css']
})
export class SearchForCityComponent implements OnInit {
	city$: Observable<CitiesModel>=this.store.select(selectFoundCities)
	isLoadingCities$:Observable<boolean>=this.store.select(isLoadingCities)
	searchText$: Observable<string>;
	noCityFound$: Observable<string>=this.store.select(noCityFoundSelector)
		.pipe(
			map(cityFound=>cityFound?'No city found with the provided name' : '')
		)

	constructor(
		private activatedRoute: ActivatedRoute, 
		private router: Router, 
		private store: Store<State>
	) {}

	ngOnInit(): void {
		this.searchText$ = this.activatedRoute.queryParams.pipe(
			map(item => item.cityName),
			distinctUntilChanged(),
			tap(cityName => {
				if(cityName)
					this.store.dispatch(searchForCity({ cityName }));
			})
		);
	}

	onSearchCityChanged(cityName: string) {
		this.router.navigate([], { queryParams: { cityName },queryParamsHandling:"merge"});
	}
}
