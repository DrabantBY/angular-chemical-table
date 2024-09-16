import { PeriodicElement } from "@models/periodic-element.type";

export const mapToTableElements = (elements: PeriodicElement[]) =>
	elements.map(({ position, name, weight, symbol }) => ({
		id: position,
		number: position,
		name,
		weight,
		symbol,
	}));
