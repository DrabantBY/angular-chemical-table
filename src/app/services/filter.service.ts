import { Injectable, signal } from "@angular/core";
import { toObservable, toSignal } from "@angular/core/rxjs-interop";
import { debounceTime } from "rxjs";
import { DELAY_TIME } from "@consts/delay-time.const";

@Injectable({
	providedIn: "root",
})
export class FilterService {
	private readonly searchValue = signal<string>("");

	readonly search = toSignal(
		toObservable(this.searchValue).pipe(debounceTime(DELAY_TIME))
	);

	setSearchValue(value: string): void {
		this.searchValue.set(value);
	}
}
