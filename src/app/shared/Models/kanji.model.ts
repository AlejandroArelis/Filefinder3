import { Word } from "./word.model";


export interface Kanji {
  id?: number;
  char?: string;
  names?: string[];
  kun?: string[];
  on?: string[];
  meanings?: string[];
  img?: string;
  jlpt?: number;
  examples?: Word[];
}
