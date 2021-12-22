import { NgModule } from "@angular/core";
import {RouterModule, Routes} from "@angular/router"

const ROUTES:Routes=[
	{
		path:"",
		pathMatch:"full",
		redirectTo:"weather"
	},
	{
		path:"weather",
		loadChildren:()=>import("./modules/forecast/forecast.module").then(m=>m.ForecastModule)
	},
	{
		path:"**",
		loadChildren:()=>import("./modules/not-found/not-found.module").then(m=>m.NotFoundModule)
	}
]
@NgModule({
	imports:[RouterModule.forRoot(ROUTES)],
	exports:[RouterModule]
})
export class AppRoutingModule{}