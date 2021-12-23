import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectFromListComponent } from './components/select-from-list/select-from-list.component';
import { FormsModule } from '@angular/forms';



@NgModule({
	declarations: [
		SelectFromListComponent
	],
	imports: [
		CommonModule,
		FormsModule
	],exports:[
		SelectFromListComponent
	]
})
export class UiModule { }
