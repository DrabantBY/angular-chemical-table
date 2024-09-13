import { Component, computed, inject } from "@angular/core";
import { ElementService } from "@services/element.service";
import { FilterService } from "@services/filter.service";
import { filterBySearch } from "@utils/filterBySearch.util";
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
