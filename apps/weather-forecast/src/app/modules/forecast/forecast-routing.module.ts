import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForecastTableUIComponent } from '@weather-forcast/shared/forecast-table-ui';

const routes: Routes = [
	{ path: "",component:ForecastTableUIComponent }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ForecastRoutingModule { }
