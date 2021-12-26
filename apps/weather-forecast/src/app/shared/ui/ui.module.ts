import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectFromListComponent } from './components/select-from-list/select-from-list.component';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from './components/button/button.component';
import { AlertComponent } from './alert/alert.component';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
	declarations: [SelectFromListComponent, ButtonComponent, AlertComponent],
	imports: [CommonModule, FormsModule,NgbAlertModule],
	exports: [SelectFromListComponent, ButtonComponent, AlertComponent],
})
export class UiModule {}
