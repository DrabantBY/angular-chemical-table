import { Injectable, computed, signal } from "@angular/core";
import { toSignal } from "@angular/core/rxjs-interop";
import { delay, map, Observable, of } from "rxjs";
import { updateElement } from "@utils/patchElement.util";
import { ELEMENT_DATA } from "@consts/element-data.const";
import { DELAY_TIME } from "@consts/delay-time.const";
import { mapToTableElements } from "@utils/mapToTableElements";
import { TableElement } from "@models/table-element.type";

@Injectable({
	providedIn: "root",
})
export class ElementService {
	readonly periodicalElements = computed(() =>
		signal<TableElement[]>(this.elements())
	);

	private readonly elements = toSignal(this.loadElements(), {
		initialValue: [],
	});

	loadElements(): Observable<TableElement[]> {
		return of(ELEMENT_DATA).pipe(delay(DELAY_TIME), map(mapToTableElements));
	}

	patchElements(value: TableElement): void {
		this.periodicalElements().update((prev) => updateElement(prev, value));
	}
}
