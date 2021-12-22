import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {  NgbAlertModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule, NgbModule,NgbAlertModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
