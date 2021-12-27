import { Component, Input } from '@angular/core';
import { ForecastTableConfig} from "@weather-forcast/core/models";
@Component({
	selector: 'bp-forecast-table-ui',
	templateUrl: './forecast-table-ui.component.html',
	styleUrls: ['./forecast-table-ui.component.css']
})
export class ForecastTableUIComponent {

	@Input() forcastTableConfig:ForecastTableConfig
	@Input() isLoading=false

}
