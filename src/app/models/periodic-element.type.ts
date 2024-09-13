export type PeriodicElement = {
	id: number;
	position: number;
	name: string;
	weight: number;
	symbol: string;
};

export type PeriodicElementKeys = keyof PeriodicElement;
