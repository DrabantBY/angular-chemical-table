import { Injectable } from "@angular/core";
import { delay, Observable, of } from "rxjs";
import { ELEMENT_DATA } from "@consts/element-data.const";
import { DELAY_TIME } from "@consts/delay-time.const";
import { PeriodicElement } from "@models/periodic-element.type";
import { toSignal } from "@angular/core/rxjs-interop";

@Injectable({
	providedIn: "root",
})
export class PeriodicElementService {
	loadPeriodicElements(): Observable<PeriodicElement[]> {
		return of(ELEMENT_DATA).pipe(delay(DELAY_TIME));
	}

	readonly elements = toSignal(this.loadPeriodicElements(), {
		initialValue: [],
	});
}
