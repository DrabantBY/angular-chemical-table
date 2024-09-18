import { TableElement } from "@models/table-element.type";

export const filterBySearch = (
	elements: TableElement[],
	search: string | null
): TableElement[] => {
	if (!search) {
		return elements;
	}

	return elements.filter((element) =>
		Object.values(element)
			.slice(1)
			.some((val) =>
				val.toString().toLowerCase().includes(search.toLowerCase())
			)
	);
};
