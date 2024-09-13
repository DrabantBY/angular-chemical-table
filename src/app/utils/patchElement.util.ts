import { PeriodicElement } from "@models/periodic-element.type";
import { PopupData } from "@models/popup-data.type";

export const updateElement = (
	elements: PeriodicElement[],
	{ id, key, value }: PopupData
): PeriodicElement[] =>
	elements.map((element) =>
		element.id === id ? { ...element, [key]: value } : element
	);
