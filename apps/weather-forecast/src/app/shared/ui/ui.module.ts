import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectFromListComponent } from './components/select-from-list/select-from-list.component';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
	declarations: [SelectFromListComponent, ButtonComponent],
	imports: [CommonModule, FormsModule],
	exports: [SelectFromListComponent, ButtonComponent],
})
export class UiModule {}
