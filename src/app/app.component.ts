import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { ElementsComponent } from "@components/elements/elements.component";

@Component({
	selector: "app-root",
	standalone: true,
	imports: [RouterOutlet, ElementsComponent],
	templateUrl: "./app.component.html",
	styleUrl: "./app.component.css",
})
export class AppComponent {}
