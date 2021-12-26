import { Component, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';
import { timer } from 'rxjs';
@Component({
	selector: 'bp-alert',
	templateUrl: './alert.component.html',
	styleUrls: ['./alert.component.css'],
})
export class AlertComponent implements OnChanges {
	@Input() type: 'info' | 'danger';
	@Input() title: string;
	@Input() message: string;

	@ViewChild('alert', { static: false }) alert: NgbAlert;
	closeAlert = true;

	ngOnChanges(changes: SimpleChanges) {
		if (this.title) {
			this.closeAlert = false;
			timer(6000).subscribe(_ => {
				this.closeAlert = true;
				this.alert.close();
			});
		}
	}
}
