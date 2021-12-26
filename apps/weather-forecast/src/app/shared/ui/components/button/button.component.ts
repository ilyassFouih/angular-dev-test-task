import { Component, Input } from '@angular/core';

@Component({
	selector: 'bp-button',
	templateUrl: './button.component.html',
	styleUrls: ['./button.component.css']
})
export class ButtonComponent {

	@Input() text:string
	@Input() disabled:boolean
	@Input() loading:boolean


}
