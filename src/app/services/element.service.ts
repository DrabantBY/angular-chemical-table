import { computed, Injectable, signal } from "@angular/core";
import { delay, Observable, of } from "rxjs";
import { ELEMENT_DATA } from "@consts/element-data.const";
import { DELAY_TIME } from "@consts/delay-time.const";
import { PeriodicElement } from "@models/periodic-element.type";
import { toSignal } from "@angular/core/rxjs-interop";
import { PopupData } from "@models/popup-data.type";
import { updateElement } from "../utils/patchElement.util";

@Injectable({
	providedIn: "root",
})
export class ElementService {
	readonly periodicalElements = computed(() =>
		signal<PeriodicElement[]>(this.elements())
	);

	private readonly elements = toSignal(this.loadElements(), {
		initialValue: [],
	});

	loadElements(): Observable<PeriodicElement[]> {
		return of(ELEMENT_DATA).pipe(delay(DELAY_TIME));
	}

	patchElements(value: PopupData) {
		this.periodicalElements().update((prev) => updateElement(prev, value));
	}
}
