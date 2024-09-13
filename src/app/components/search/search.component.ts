import { Component, inject } from "@angular/core";
import { FilterService } from "@services/filter.service";
import { searchImports } from "./search.config";

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
		this.filterService.setSearchValue(value.trim());
	}
}
