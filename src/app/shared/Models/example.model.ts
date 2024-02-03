import { Char } from "./char.model";
import { Generic } from "./generic.model";

export type Example = {
  id: number;
  name: string;
  value: string | number;
  meanings: Generic[];
  // chars: Char[];
}