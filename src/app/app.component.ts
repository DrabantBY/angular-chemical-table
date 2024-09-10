import { Component, inject } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { PeriodicalTableComponent } from "./components/periodical-table/periodical-table.component";
import { toSignal } from "@angular/core/rxjs-interop";
import { PeriodicElementService } from "./services/periodic-element.service";
import { MatProgressSpinner } from "@angular/material/progress-spinner";

@Component({
	selector: "app-root",
	standalone: true,
	imports: [RouterOutlet, PeriodicalTableComponent, MatProgressSpinner],
	templateUrl: "./app.component.html",
	styleUrl: "./app.component.css",
})
export class AppComponent {
	private readonly periodicElementService = inject(PeriodicElementService);

	periodicElements = toSignal(
		this.periodicElementService.loadPeriodicElements(),
		{ initialValue: [] }
	);
}
