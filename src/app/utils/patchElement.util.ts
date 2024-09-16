import { TableElement } from "@models/table-element.type";

export const updateElement = (
	elements: TableElement[],
	newElement: TableElement
): TableElement[] =>
	elements.map((element) =>
		element.id === newElement.id ? newElement : element
	);
