import { Component, inject } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { MatProgressSpinner } from "@angular/material/progress-spinner";
import { PeriodicalTableComponent } from "./components/periodical-table/periodical-table.component";
import { SearchComponent } from "./components/search/search.component";
import { PeriodicElementService } from "./services/periodic-element.service";
import { FilterService } from "./services/filter.service";

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
	private readonly periodicElementService = inject(PeriodicElementService);
	private readonly filterService = inject(FilterService);

	periodicElements = this.periodicElementService.elements;

	search = this.filterService.search;
}
