import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CitiesModel } from '@weather-forcast/core/models';
import { debounceTime, distinctUntilChanged, map, Observable, OperatorFunction, switchMap, tap } from 'rxjs';

@Component({
	selector: 'bp-forecast-type-ahead',
	templateUrl: './forecast-type-ahead.component.html',
	styleUrls: ['./forecast-type-ahead.component.css']
})
export class ForecastTypeAheadComponent {


	@Input() label:string
	@Input() placeholder:string
	@Input() foundCities$:Observable<CitiesModel[]>
	@Input() isLoading:boolean
	@Input() searchText="" 
	@Output() searchTextChnage:EventEmitter<string>=new EventEmitter()

	onSearchForCity:OperatorFunction<string,string[]>=(text$:Observable<string>)=>
		text$.pipe(
			debounceTime(500),
			distinctUntilChanged(),
			tap((term)=>this.searchTextChnage.emit(term)),
			switchMap(term=>this.foundCities$
				.pipe(
					map(cities=>cities.map(item=>`${item.name}(${item.local_names?.en})`))
				)
			)
		)
 
}
