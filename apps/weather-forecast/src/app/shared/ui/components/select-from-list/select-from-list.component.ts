import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
	selector: 'bp-select-from-list',
	templateUrl: './select-from-list.component.html',
	styleUrls: ['./select-from-list.component.css']
})
export class SelectFromListComponent implements OnChanges {

	@Input() options:string[]
	@Input() label:string
	@Input() selected:string
	@Output() selectedChange:EventEmitter<string>=new EventEmitter()

	SELECT_OPTION="selectOption"

	constructor(){
		//if no item is selected 
		this.selected=this.SELECT_OPTION
	}

	ngOnChanges(changes: SimpleChanges): void {
		if(!changes.selected?.currentValue)
			this.selected=this.SELECT_OPTION
	}

	onSelectedChange(newSelected:string){
		this.selectedChange.emit(newSelected)
	}

}
