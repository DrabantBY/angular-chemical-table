import { TableElement } from "./table-element.type";

export type TableState = {
	elements: TableElement[];
	loading: boolean;
	search: string | null;
};
