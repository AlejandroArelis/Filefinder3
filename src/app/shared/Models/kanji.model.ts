import { Word } from "./word.model";

export type Kanji = {
  id: number;
  char: string;
  names?: string[];
  kun?: string[];
  on?: string[];
  meanings?: string[];
  image?: string;
  jlpt?: number;
  checked?: boolean;
  examples?: Word[];
}
