import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { UiModule } from '@weather-forcast/shared/ui/ui.module';
import { StateModule } from '@weather-forcast/state/state.module';



@NgModule({
	declarations: [
	],
	exports:[
		NgbModule,
		BrowserModule,
		CommonModule,
		UiModule,
		StateModule
	]
})
export class CoreModule { }
