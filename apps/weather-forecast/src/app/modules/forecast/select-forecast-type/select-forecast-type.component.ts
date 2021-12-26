import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'bp-select-forecast-type',
	templateUrl: './select-forecast-type.component.html',
	styleUrls: ['./select-forecast-type.component.css'],
	changeDetection:ChangeDetectionStrategy.Default
})
export class SelectForecastTypeComponent {

	selected:string

	constructor(
		private router:Router
	){
		
	}

	onNewTypeSelected(forecastType:string){
		this.router.navigate([],{queryParams:{forecastType},queryParamsHandling:"merge"})
	}	
}
