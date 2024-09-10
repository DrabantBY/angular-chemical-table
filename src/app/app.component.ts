import { Component, signal } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { PeriodicElement } from "@models/periodic-element.type";
import { ELEMENT_DATA } from "./consts/element-data.const";
import { PeriodicalTableComponent } from "./components/periodical-table/periodical-table.component";

@Component({
	selector: "app-root",
	standalone: true,
	imports: [RouterOutlet, PeriodicalTableComponent],
	templateUrl: "./app.component.html",
	styleUrl: "./app.component.css",
})
export class AppComponent {
	periodicElements = signal<PeriodicElement[]>(ELEMENT_DATA);
}
