import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForecastRoutingModule } from './forecast-routing.module';
import { ForecastTableUiModule } from '@weather-forcast/shared/forecast-table-ui';
import { WeatherForecastComponent } from './weather-forecast/weather-forecast.component';
import { UiModule } from '@weather-forcast/shared/ui/ui.module';
import { ForecastTypeAheadModule } from '@weather-forcast/shared/forecast-type-ahead/forecast-type-ahead.module';
import { SearchForCityComponent } from './search-for-city/search-for-city.component';
import { SelectForecastTypeComponent } from './select-forecast-type/select-forecast-type.component';
import { ForecastResultTableComponent } from './forecast-result-table/forecast-result-table.component';
import { SearchButtonComponent } from './search-button/search-button.component';


@NgModule({
	declarations: [
		WeatherForecastComponent,
		SearchForCityComponent,
		SelectForecastTypeComponent,
		ForecastResultTableComponent,
		SearchButtonComponent
	],
	imports: [
		CommonModule,
		ForecastTableUiModule,
		ForecastTypeAheadModule,
		UiModule,
		ForecastRoutingModule,
		
	]
})
export class ForecastModule { }
