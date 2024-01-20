import { Char } from "./char.model";

export type Word = {
  id: number;
  meanings: string[];
  type: string;
  chars: Char[];
}