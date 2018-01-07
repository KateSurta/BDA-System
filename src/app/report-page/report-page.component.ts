import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';


import { DbService } from './../services/db/db.service'

@Component({
	selector: 'app-report-page',
	templateUrl: './report-page.component.html',
	styleUrls: ['./report-page.component.css']
})

export class ReportPageComponent {
	public myForm: FormGroup;
	public allData: any = {};
	public settings: any = {};
	public plots = {};
	public years = [];
	public tableExport = [];
	public showPlot = false;


	constructor(public dbService: DbService, private fb: FormBuilder) {
		this.allData = this.dbService.getAllTables();
		
		this.settings = {
			operation: this.allData.OPERATIONS[0].ID,
			banks: this.initAllBanks(),
			startYear: this.allData.Date_of_report[0].Year,
			endYear: this.allData.Date_of_report[this.allData.Date_of_report.length - 1].Year
		}

		this.years = this.allData.Date_of_report.map(el => el.Year).filter((value, index, self) => {
			return self.indexOf(value) === index;
		});

	}

	initAllBanks() {
		let obj = {};
		this.allData.Banks.forEach(bank => {
			obj[bank.ID] = true;
		});
		return obj;
	}

	handleChange(ID: number) {
		this.settings.banks[ID] = !this.settings.banks[ID];
	}

	drawPlot() {
		this.showPlot = true;
		this.plots = {
			data: this.getDataForPlots(),
			xValue: this.getYearsQuarters()
		};
	}

	exportToTable() {
		this.showPlot = false;
		this.tableExport = this.getDataForTable();
	}



	getDataForPlots() {
		let data = [];
		for (let key in this.settings.banks) {
			if (this.settings.banks[key]) {
				data.push({
					name: this.bankNameById(key),
					data: this.filterBankData(key).map(el => el.Value)
				})
			}
		}
		return data;
	}

	getDataForTable() {
		let data = [];
		for (let key in this.settings.banks) {
			if (this.settings.banks[key]) {
				this.filterBankData(key).forEach((bankData) => {
					data.push({
						name: this.bankNameById(key),
						ID_date: bankData["ID_date"],
						Value: bankData["Value"],
					})

				})
			}
		}
		return data;
	}

	bankNameById(ID: string) {
		return this.allData.Banks.find(el => {
			return el.ID === ID;
		}).Name_of_banks;
	}

	filterBankData(ID: string): any {
		let res = this.allData.Fact_quererly_stats.filter(row => {
			return row.ID_banks === ID &&
				this.isCorrectYear(row.ID_date) &&
				row.ID_operations == this.settings.operation
		});
		return res;
	}

	isCorrectYear(ID: string) {
		let year = ID.slice(0, 4);
		return year >= this.settings.startYear && year <= this.settings.endYear
	}

	getYearsQuarters() {
		return this.allData.Date_of_report.filter(row => {
			return row.Year >= this.settings.startYear && row.Year <= this.settings.endYear
		}).map(el => el.Year + "_Q" + el.Quarter);
	}

}
