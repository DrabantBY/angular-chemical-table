import { Component, inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { ElementService } from "@services/element.service";
import { PopupData } from "@models/popup-data.type";
import { popupImports } from "./popup.config";

@Component({
	selector: "app-popup",
	standalone: true,
	imports: popupImports,
	templateUrl: "./popup.component.html",
	styleUrl: "./popup.component.css",
})
export class PopupComponent {
	private readonly dialogRef = inject(MatDialogRef<PopupComponent>);

	private readonly elementService = inject(ElementService);

	private readonly data = inject<PopupData>(MAT_DIALOG_DATA);

	currentValue = this.data.value;

	onClick(): void {
		const newData = { ...this.data, value: this.currentValue };
		this.elementService.patchElements(newData);
		this.dialogRef.close();
	}
}
