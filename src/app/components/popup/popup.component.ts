import { Component, inject } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { ElementService } from "@services/element.service";
import { popupImports } from "./popup.config";
import { TableElement } from "@models/table-element.type";
import { patchElements } from "@utils/patchElements.util";
import { ELEMENT_KEY } from "@consts/element-key.const";

@Component({
	selector: "app-popup",
	standalone: true,
	imports: popupImports,
	templateUrl: "./popup.component.html",
	styleUrl: "./popup.component.css",
})
export class PopupComponent {
	private readonly data = inject<TableElement>(MAT_DIALOG_DATA);

	private readonly elementService = inject(ElementService);

	private readonly formBuilder = inject(FormBuilder);

	readonly formElement = this.formBuilder.group({
		...this.data,
	});

	readonly headers = ELEMENT_KEY;

	onSubmit(): void {
		const element = this.formElement.value as TableElement;
		this.elementService.state.set("elements", (state) =>
			patchElements(state, element)
		);
	}
}
