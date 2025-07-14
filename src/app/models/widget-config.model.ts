import { Type } from "@angular/core";

export interface Widget {
    id: number;
    label: string;
    content: Type<unknown>;
    type?: string;
    rows?: number;
    columns?: number;
    backgroundColor?: string;
    color?: string;
}