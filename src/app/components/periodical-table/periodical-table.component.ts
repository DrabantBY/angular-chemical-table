import { PeriodicElement } from "@models/periodic-element.type";
import { Component, inject, input } from "@angular/core";
import { periodicalTableImports } from "./periodical-table.config";
import { ELEMENT_DATA_KEY } from "@consts/element-data.const";
import { MatDialog } from "@angular/material/dialog";
import { PopupComponent } from "../popup/popup.component";

@Component({
	selector: "app-periodical-table",
	standalone: true,
	imports: periodicalTableImports,
	templateUrl: "./periodical-table.component.html",
	styleUrl: "./periodical-table.component.css",
})
export class PeriodicalTableComponent {
	private readonly popup = inject(MatDialog);

	readonly periodicElements = input.required<PeriodicElement[]>();

	readonly headers = ELEMENT_DATA_KEY;

	onClick(key: string, value: string | number, id: number): void {
		const data = { id, key, value };
		this.popup.open(PopupComponent, { data });
	}
}
