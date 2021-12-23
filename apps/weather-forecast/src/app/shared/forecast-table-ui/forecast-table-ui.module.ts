import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForecastTableUIComponent } from './forecast-table-ui/forecast-table-ui.component';



@NgModule({
	declarations: [
		ForecastTableUIComponent
	],
	imports: [
		CommonModule
	],
	exports:[ForecastTableUIComponent]
})
export class ForecastTableUiModule { }
