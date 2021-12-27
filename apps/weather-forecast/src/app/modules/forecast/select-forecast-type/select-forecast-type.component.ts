import {  Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'bp-select-forecast-type',
	templateUrl: './select-forecast-type.component.html',
	styleUrls: ['./select-forecast-type.component.css']
})
export class SelectForecastTypeComponent implements OnInit {

	selected:string

	constructor(
		private router:Router,
		private activatedRoute:ActivatedRoute
	){
		
	}
	ngOnInit(): void {
		this.selected=this.activatedRoute.snapshot.queryParams.forecastType
	}

	onNewTypeSelected(forecastType:string){
		this.router.navigate([],{queryParams:{forecastType},queryParamsHandling:"merge"})
	}	
}
