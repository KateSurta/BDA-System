import { Component, SimpleChanges } from '@angular/core';
import Plotly from 'plotly.js/lib/core';

@Component({
	selector: 'app-chart',
	templateUrl: './chart.component.html',
	styleUrls: ['./chart.component.css'],
	inputs: ['plots'],
})
export class ChartComponent {
	public plots;

	constructor() { }


	ngOnChanges(changes: { [propertyName: string]: SimpleChanges }) {
		if (changes['plots']) {
			this.plots = changes.plots.currentValue;

			this.drawPlot(this.plots);
		}
	}

	drawPlot(plots) {
		if (!Object.keys(plots).length) {
			return;
		}

		const plotItem = (plot) => {
			let res = {
				x: plots.xValue,
				y: plot.data.map(el => +el),
				name: plot.name,
				type: 'bar'
			};
			return res;
		}
		var layout = {

			legend: {
				x: 0,
				y: 1.0,
				bgcolor: 'rgba(255, 255, 255, 0)',
				bordercolor: 'rgba(255, 255, 255, 0)'
			},
			barmode: 'group',
			bargap: 0.15,
			bargroupgap: 0.1
		};

		Plotly.newPlot('displayPlot', plots.data.map((plot) => plotItem(plot)), layout);
	}
}
