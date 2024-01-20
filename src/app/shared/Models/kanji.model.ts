import { Word } from "./word.model";

export type Kanji = {
  id: number;
  name: string[];
  kun: string[];
  on: string[];
  meanings: string[];
  image: string;
  learned: boolean;
  level: number;
  examples: Word[];
}