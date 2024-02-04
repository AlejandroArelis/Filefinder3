import { Generic } from "@models/generic.model";

export interface Example {
  id: number;
  name: string;
  value: string | number;
  meanings: Generic[];
  // chars: Char[];
}