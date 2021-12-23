import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForecastRoutingModule } from './forecast-routing.module';
import { ForecastTableUiModule } from '@weather-forcast/shared/forecast-table-ui';


@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		ForecastTableUiModule,
		ForecastRoutingModule
	]
})
export class ForecastModule { }
