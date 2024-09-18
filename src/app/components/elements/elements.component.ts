import { Component, inject } from "@angular/core";
import { ElementService } from "@services/element.service";
import { elementsImports } from "./elements.config";

@Component({
	selector: "app-elements",
	standalone: true,
	imports: elementsImports,
	templateUrl: "./elements.component.html",
	styleUrl: "./elements.component.css",
})
export class ElementsComponent {
	private readonly elementService = inject(ElementService);

	readonly loading = this.elementService.state.signal("loading");
	readonly searchedElements = this.elementService.searchedElements;

	// private readonly filterService = inject(FilterService);

	// readonly isNoElements = computed(
	// 	() => this.elementService.periodicalElements()().length === 0
	// );

	// readonly searchedElements = computed(() =>
	// 	filterBySearch(
	// 		this.elementService.periodicalElements()(),
	// 		this.filterService.search()
	// 	)
	// );
}
