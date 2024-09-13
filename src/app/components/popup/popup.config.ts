import { FormsModule } from "@angular/forms";
import { MatIcon } from "@angular/material/icon";
import { MatInput, MatFormField, MatPrefix } from "@angular/material/input";
import {
	MatDialogContent,
	MatDialogActions,
	MatDialogClose,
	MatDialogTitle,
} from "@angular/material/dialog";
import { MatIconButton } from "@angular/material/button";

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
