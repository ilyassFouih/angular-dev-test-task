import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForecastRoutingModule } from './forecast-routing.module';
import { ForecastTableUiModule } from '@weather-forcast/shared/forecast-table-ui';
import { WeatherForecastComponent } from './weather-forecast/weather-forecast.component';
import { UiModule } from '@weather-forcast/shared/ui/ui.module';
import { ForecastTypeAheadModule } from '@weather-forcast/shared/forecast-type-ahead/forecast-type-ahead.module';


@NgModule({
	declarations: [
		WeatherForecastComponent
	],
	imports: [
		CommonModule,
		ForecastTableUiModule,
		ForecastTypeAheadModule,
		UiModule,
		ForecastRoutingModule
	]
})
export class ForecastModule { }
