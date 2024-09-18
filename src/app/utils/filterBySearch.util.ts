import { TableElement } from "@models/table-element.type";

export const filterBySearch = (
	elements: TableElement[],
	search: string | null
): TableElement[] =>
	!search
		? elements
		: elements.filter((element) =>
				Object.values(element)
					.slice(1)
					.some((val) =>
						val.toString().toLowerCase().includes(search.toLowerCase())
					)
		  );
