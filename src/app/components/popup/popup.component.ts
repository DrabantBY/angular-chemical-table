import { Component, inject } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { ElementService } from "@services/element.service";
import { popupImports } from "./popup.config";
import { TableElement } from "@models/table-element.type";
import { ELEMENT_KEY } from "@consts/element-key.const";

@Component({
	selector: "app-popup",
	standalone: true,
	imports: popupImports,
	templateUrl: "./popup.component.html",
	styleUrl: "./popup.component.css",
})
export class PopupComponent {
	private readonly formBuilder = inject(FormBuilder);

	private readonly elementService = inject(ElementService);

	private readonly data = inject<TableElement>(MAT_DIALOG_DATA);

	readonly headers = ELEMENT_KEY;

	readonly formElement = this.formBuilder.group({
		...this.data,
	});

	onSubmit(): void {
		// this.elementService.patchElements(this.formElement.value as TableElement);
	}
}
