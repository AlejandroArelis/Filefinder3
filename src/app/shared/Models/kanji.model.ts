import { Word } from './word.model';

export type Kanji = {
  id: number;
  char: string;
  names: Item[];
  kun: Item[];
  on: Item[];
  meanings?: Item[];
  image?: string;
  jlpt?: number;
  checked?: boolean;
  examples?: Word[];
};

export type Item = {
  id?: number;
  value?: string | number;
  kanjiId?: number;
};
