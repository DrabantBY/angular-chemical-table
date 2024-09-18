import { TableElement } from "@models/table-element.type";
import { TableState } from "@models/table-state.type";

export const patchElements = (
	{ elements }: TableState,
	newElement: TableElement
): TableElement[] =>
	elements.map((element) =>
		element.id === newElement.id ? newElement : element
	);
