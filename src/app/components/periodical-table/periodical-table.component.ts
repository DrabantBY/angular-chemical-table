import { PeriodicElementKeys } from "./../../models/periodic-element.type";
import { PeriodicElement } from "@models/periodic-element.type";
import { Component, input } from "@angular/core";
import { periodicalTableImports } from "./periodical-table.config";

@Component({
	selector: "app-periodical-table",
	standalone: true,
	imports: periodicalTableImports,
	templateUrl: "./periodical-table.component.html",
	styleUrl: "./periodical-table.component.css",
})
export class PeriodicalTableComponent {
	periodicElements = input.required<PeriodicElement[]>();

	headers: PeriodicElementKeys[] = ["position", "name", "weight", "symbol"];
}
