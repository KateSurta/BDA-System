import { Component, SimpleChanges } from '@angular/core';

@Component({
	selector: 'app-table-export',
	templateUrl: './table-export.component.html',
	styleUrls: ['./table-export.component.css'],
	inputs: ['tableExport'],
})
export class TableExportComponent {
	public tableExport: any;
	public ID_dates;

	constructor() { }

	ngOnChanges(changes: { [propertyName: string]: SimpleChanges }) {
		if (changes['tableExport']) {
			const tableChanges: any = changes.tableExport.currentValue;
			this.tableExport = [];
			this.ID_dates = tableChanges.map(el => el.ID_date).filter((value, index, self) => {
				return self.indexOf(value) === index;
			});
			const amountOfDates = this.ID_dates.length;
			for (let i = 0; i < tableChanges.length; i += amountOfDates) {
				const bankData = tableChanges.slice(i, i + amountOfDates);
				this.tableExport.push({
					name: bankData[0].name,
					values: bankData.map(el => el.Value)
				});
			}
			console.log(this.tableExport)
		}
	}

	highlightMaxInColumn() {
		const table: any = document.getElementById('tableExport');
		for (var i = 1; i <= this.ID_dates.length; i++) {
			let maxValueInColumn = 0;
			let maxValueInColumnIndex = 0;
			for (let j = 1; j < table.rows.length; j++) {
				const cell = table.rows[j].children[i];
				const value = +cell.innerHTML;
				if (maxValueInColumn < value) {
					maxValueInColumn = value;
					maxValueInColumnIndex = j;
				}
			}
			table.rows[maxValueInColumnIndex].children[i].bgColor = "palegreen";
		}
	}

}
