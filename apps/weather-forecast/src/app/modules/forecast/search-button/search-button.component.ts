import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectCityState } from '@weather-forcast/state/cities/city.selectors';
import { State } from '@weather-forcast/state/state';
import { combineLatest ,map, Observable } from 'rxjs';

@Component({
	selector: 'bp-search-button',
	templateUrl: './search-button.component.html',
	styleUrls: ['./search-button.component.css']
})
export class SearchButtonComponent implements OnInit {

	disabled$:Observable<boolean>=null
	constructor(
		private activatedRoute:ActivatedRoute,
		private store:Store<State>
	) { }

	ngOnInit(){
		const foundCity$=this.store.select(selectCityState)
		const forcastType=this.activatedRoute.queryParams.pipe(map(q=>q.forecastType as string))
		this.disabled$=combineLatest([foundCity$,forcastType])
			.pipe(
				map(([foundCity,type])=>!foundCity.city || !type)
			)
	}

	onSearch(){
		const res=""
		console.log(res)
	}

}
