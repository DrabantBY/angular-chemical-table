import { PeriodicElement } from "@models/periodic-element.type";
import { Component, input } from "@angular/core";
import { periodicalTableImports } from "./periodical-table.config";
import { ELEMENT_DATA_KEY } from "@consts/element-data.const";

@Component({
	selector: "app-periodical-table",
	standalone: true,
	imports: periodicalTableImports,
	templateUrl: "./periodical-table.component.html",
	styleUrl: "./periodical-table.component.css",
})
export class PeriodicalTableComponent {
	readonly periodicElements = input.required<PeriodicElement[]>();

	readonly headers = ELEMENT_DATA_KEY;
}
