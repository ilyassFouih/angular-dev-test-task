import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotFoundRoutingModule } from './not-found-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
	declarations: [
		NotFoundComponent
	],
	imports: [
		CommonModule,
		NgbAlertModule,
		NotFoundRoutingModule
	]
})
export class NotFoundModule { }
