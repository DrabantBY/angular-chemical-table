import { Component, inject, signal } from "@angular/core";
import { searchImports } from "./search.config";
import { FilterService } from "src/app/services/filter.service";

@Component({
	selector: "app-search",
	standalone: true,
	imports: searchImports,
	templateUrl: "./search.component.html",
	styleUrl: "./search.component.css",
})
export class SearchComponent {
	private readonly filterService = inject(FilterService);

	onChange(value: string): void {
		this.filterService.setSearchValue(value);
	}
}
