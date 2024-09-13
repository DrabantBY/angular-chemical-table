import { Component, inject, input } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { ELEMENT_DATA_KEY } from "@consts/element-data.const";
import { PeriodicElement } from "@models/periodic-element.type";
import { PopupComponent } from "../popup/popup.component";
import { tableImports } from "./table.config";

@Component({
	selector: "app-table",
	standalone: true,
	imports: tableImports,
	templateUrl: "./table.component.html",
	styleUrl: "./table.component.css",
})
export class TableComponent {
	private readonly popup = inject(MatDialog);

	readonly periodicElements = input.required<PeriodicElement[]>();

	readonly headers = ELEMENT_DATA_KEY;

	onClick(key: string, value: string | number, id: number): void {
		const data = { id, key, value };
		this.popup.open(PopupComponent, { data });
	}
}
