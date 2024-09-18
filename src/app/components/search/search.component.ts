import { Component, inject } from "@angular/core";
import { FormControl } from "@angular/forms";
import { debounceTime, map } from "rxjs";
import { ElementService } from "@services/element.service";
import { searchImports } from "./search.config";
import { DELAY_TIME } from "@consts/delay-time.const";

@Component({
	selector: "app-search",
	standalone: true,
	imports: searchImports,
	templateUrl: "./search.component.html",
	styleUrl: "./search.component.css",
})
export class SearchComponent {
	private readonly elementService = inject(ElementService);

	readonly searchInput = new FormControl<string>("");

	constructor() {
		this.elementService.state.connect(
			"search",
			this.searchInput.valueChanges.pipe(
				debounceTime(DELAY_TIME),
				map((value) => (value ? value.trim() : value))
			)
		);
	}
}
