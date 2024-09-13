import { FormsModule } from "@angular/forms";
import {
	MatDialogContent,
	MatDialogActions,
	MatDialogClose,
	MatDialogTitle,
} from "@angular/material/dialog";
import { MatInput, MatFormField, MatPrefix } from "@angular/material/input";
import { MatIconButton } from "@angular/material/button";
import { MatIcon } from "@angular/material/icon";

export const popupImports = [
	FormsModule,
	MatFormField,
	MatInput,
	MatPrefix,
	MatDialogTitle,
	MatDialogContent,
	MatDialogActions,
	MatDialogClose,
	MatIcon,
	MatIconButton,
];
