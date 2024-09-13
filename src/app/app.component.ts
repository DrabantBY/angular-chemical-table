import { Component, computed, inject } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { MatProgressSpinner } from "@angular/material/progress-spinner";
import { PeriodicalTableComponent } from "./components/periodical-table/periodical-table.component";
import { SearchComponent } from "./components/search/search.component";
import { ElementService } from "./services/element.service";
import { FilterService } from "./services/filter.service";
import { filterBySearch } from "./utils/filterBySearch.util";

@Component({
	selector: "app-root",
	standalone: true,
	imports: [
		RouterOutlet,
		PeriodicalTableComponent,
		MatProgressSpinner,
		SearchComponent,
	],
	templateUrl: "./app.component.html",
	styleUrl: "./app.component.css",
})
export class AppComponent {
	private readonly elementService = inject(ElementService);
	private readonly filterService = inject(FilterService);

	readonly isNoElements = computed(
		() => this.elementService.periodicalElements()().length === 0
	);

	readonly searchedElements = computed(() =>
		filterBySearch(
			this.elementService.periodicalElements()(),
			this.filterService.search()
		)
	);
}
