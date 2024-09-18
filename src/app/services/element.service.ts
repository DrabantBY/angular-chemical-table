import { Injectable } from "@angular/core";
import { rxState } from "@rx-angular/state";
import { delay, endWith, map, Observable, of, startWith } from "rxjs";
import { mapToTableElements } from "@utils/mapToTableElements";
import { ELEMENT_DATA } from "@consts/element-data.const";
import { DELAY_TIME } from "@consts/delay-time.const";
import { TableElement } from "@models/table-element.type";
import { TableState } from "@models/table-state.type";
import { filterBySearch } from "@utils/filterBySearch.util";

const initialState: TableState = {
	elements: [],
	loading: false,
	search: null,
};

@Injectable({
	providedIn: "root",
})
export class ElementService {
	private loadElements(): Observable<TableElement[]> {
		return of(ELEMENT_DATA).pipe(delay(DELAY_TIME), map(mapToTableElements));
	}

	readonly state = rxState<TableState>(({ set, connect }) => {
		set(initialState);
		connect(
			this.loadElements().pipe(
				map((elements) => ({ elements })),
				startWith({ loading: true }),
				endWith({ loading: false })
			)
		);
	});

	readonly loading = this.state.signal("loading");

	readonly searchedElements = this.state.computed(({ elements, search }) =>
		filterBySearch(elements(), search())
	);
}
