import { PeriodicElementKeys } from "./periodic-element.type";

export type PopupData = {
	id: number;
	key: PeriodicElementKeys;
	value: string | number;
};
