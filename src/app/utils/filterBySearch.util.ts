import { PeriodicElement } from "@models/periodic-element.type";

export const filterBySearch = (
	elements: PeriodicElement[],
	searchValue: string
): PeriodicElement[] => {
	if (!searchValue) {
		return elements;
	}

	return elements.filter((element) =>
		Object.values(element).some((val) =>
			val.toString().toLowerCase().includes(searchValue.toLowerCase())
		)
	);
};
