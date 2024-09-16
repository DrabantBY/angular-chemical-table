import { Component, computed, inject, input } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { PopupComponent } from "../popup/popup.component";
import { tableImports } from "./table.config";
import { TableElement } from "@models/table-element.type";
import { ELEMENT_KEY } from "@consts/element-key.const";

@Component({
	selector: "app-table",
	standalone: true,
	imports: tableImports,
	templateUrl: "./table.component.html",
	styleUrl: "./table.component.css",
})
export class TableComponent {
	private readonly popup = inject(MatDialog);

	readonly periodicElements = input.required<TableElement[]>();

	readonly headers = ELEMENT_KEY;

	onClick(data: TableElement): void {
		this.popup.open(PopupComponent, { data });
	}
}
