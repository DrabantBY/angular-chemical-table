import { PeriodicElement } from "@models/periodic-element.type";
import { TableElement } from "@models/table-element.type";

export const filterBySearch = (
	elements: TableElement[],
	searchValue: string
): TableElement[] => {
	if (!searchValue) {
		return elements;
	}

	return elements.filter((element) =>
		Object.values(element)
			.slice(1)
			.some((val) =>
				val.toString().toLowerCase().includes(searchValue.toLowerCase())
			)
	);
};
