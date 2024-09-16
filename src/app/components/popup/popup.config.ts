import { ReactiveFormsModule } from "@angular/forms";
import {
	MatDialogContent,
	MatDialogActions,
	MatDialogClose,
	MatDialogTitle,
} from "@angular/material/dialog";
import {
	MatInput,
	MatFormField,
	MatPrefix,
	MatLabel,
} from "@angular/material/input";
import { MatButton } from "@angular/material/button";

export const popupImports = [
	ReactiveFormsModule,
	MatFormField,
	MatLabel,
	MatInput,
	MatPrefix,
	MatDialogTitle,
	MatDialogContent,
	MatDialogActions,
	MatDialogClose,
	MatButton,
];
