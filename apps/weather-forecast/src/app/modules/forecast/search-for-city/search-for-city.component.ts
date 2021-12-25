import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WeatherForecastApiService } from '@bp/weather-forecast/services';
//import { CITIES_MOCKS } from '@weather-forcast/core/mocks/cities.mocks';
import { CitiesModel } from '@weather-forcast/core/models';
import { distinctUntilChanged, filter, map, Observable, of, tap } from 'rxjs';

@Component({
	selector: 'bp-search-for-city',
	templateUrl: './search-for-city.component.html',
	styleUrls: ['./search-for-city.component.css']
})
export class SearchForCityComponent implements OnInit {

	cities$:Observable<CitiesModel[]>=of([])
	searchText$:Observable<string>
	constructor(
		private activatedRoute:ActivatedRoute,
		private router:Router,
		private weatherService:WeatherForecastApiService
	){}


	ngOnInit(): void {
		this.searchText$=this.activatedRoute
			.queryParams
			.pipe(
				map(item=>item.cityName),
				filter(item=>item),
				distinctUntilChanged(),
				tap(text=>{
				//TODO: call Reducer here 
					this.weatherService.searchForCityByName(text).subscribe(res=>console.log(res))
				})
			)
	}

	onSearchCityChanged(cityName:string){
		this.router.navigate([],{queryParams:{cityName}})
	}

	
}
