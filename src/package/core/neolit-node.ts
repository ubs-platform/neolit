import { State } from "./state";

export type NeolitNode = HTMLElement | Text;
export type NeolitChild = NeolitNode | State<any> | string | number | null | undefined;