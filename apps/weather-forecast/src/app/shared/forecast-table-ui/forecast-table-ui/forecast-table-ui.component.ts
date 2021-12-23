import { Component, Input } from '@angular/core';
import { FORECAST_TABLE_MOCK } from '@weather-forcast/core/mocks';
import { ForecastTableConfig} from "@weather-forcast/core/models";
@Component({
	selector: 'bp-forecast-table-ui',
	templateUrl: './forecast-table-ui.component.html',
	styleUrls: ['./forecast-table-ui.component.css']
})
export class ForecastTableUIComponent {

	@Input() forcastTableConfig:ForecastTableConfig=FORECAST_TABLE_MOCK

}
