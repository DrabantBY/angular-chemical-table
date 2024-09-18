import { PeriodicElement } from "@models/periodic-element.type";
import { TableElement } from "@models/table-element.type";

export const mapToTableElements = (data: PeriodicElement[]): TableElement[] =>
	data.map(({ position, name, weight, symbol }) => ({
		id: position,
		number: position,
		name,
		weight,
		symbol,
	}));
