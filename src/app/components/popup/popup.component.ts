import { Component, inject } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { ElementService } from "@services/element.service";
import { popupImports } from "./popup.config";
import { TableElement } from "@models/table-element.type";
import { ELEMENT_KEY } from "@consts/element-key.const";
import { patchElements } from "@utils/patchElements.util";
import { Observable } from "rxjs";

@Component({
	selector: "app-popup",
	standalone: true,
	imports: popupImports,
	templateUrl: "./popup.component.html",
	styleUrl: "./popup.component.css",
})
export class PopupComponent {
	private readonly data = inject<TableElement>(MAT_DIALOG_DATA);

	private readonly formBuilder = inject(FormBuilder);

	private readonly elementService = inject(ElementService);

	readonly headers = ELEMENT_KEY;

	readonly formElement = this.formBuilder.group({
		...this.data,
	});

	onSubmit(): void {
		const element = this.formElement.value as TableElement;
		this.elementService.state.set("elements", (state) =>
			patchElements(state, element)
		);
	}
}
