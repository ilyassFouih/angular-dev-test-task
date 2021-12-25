import { Component } from '@angular/core';
import { CITIES_MOCKS } from '@weather-forcast/core/mocks/cities.mocks';
import { CitiesModel } from '@weather-forcast/core/models';
import { Observable, of } from 'rxjs';

@Component({
	selector: 'bp-search-for-city',
	templateUrl: './search-for-city.component.html',
	styleUrls: ['./search-for-city.component.css']
})
export class SearchForCityComponent  {

	cities$:Observable<CitiesModel[]>=of(CITIES_MOCKS)
}
