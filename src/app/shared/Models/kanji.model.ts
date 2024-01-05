import { Word } from "./char.model";

export interface Kanji {
  id?: number;
  name: string;
  kun: string[];
  on: string[];
  meanings: string[];
  img: string;
  examples?: Word[];
}