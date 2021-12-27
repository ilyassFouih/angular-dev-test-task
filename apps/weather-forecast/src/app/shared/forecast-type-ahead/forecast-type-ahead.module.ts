import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForecastTypeAheadComponent } from './forecast-type-ahead/forecast-type-ahead.component';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';



@NgModule({
	declarations: [
		ForecastTypeAheadComponent
	],
	imports: [
		CommonModule,
		NgbTypeaheadModule,
		FormsModule
	],
	exports:[
		ForecastTypeAheadComponent
	]
})
export class ForecastTypeAheadModule { }
