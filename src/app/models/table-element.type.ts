import { ElementType } from "./element.type";

export type TableElement = ElementType & { id: number; number: number };

export type TableHeaders = keyof ElementType | "number";
