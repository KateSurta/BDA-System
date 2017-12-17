import { Injectable } from '@angular/core';
import * as Banks from './Banks.json';
import * as Date_of_report from './Date_of_report.json';
import * as Fact_quererly_stats from './Fact_quererly_stats.json';
import * as OPERATIONS from './OPERATIONS.json';
import * as sqlite_sequence from './sqlite_sequence.json';
import * as User from './User.json';

@Injectable()
export class DbService {

	constructor() { }

	getAllTables() {

		const obj: any = {};
		obj['Banks'] = Banks;
		obj['Date_of_report'] = Date_of_report;
		obj['Fact_quererly_stats'] = Fact_quererly_stats;
		obj['OPERATIONS'] = OPERATIONS;
		obj['sqlite_sequence'] = sqlite_sequence;
		obj['User'] = User;
		return obj;
	}

}
