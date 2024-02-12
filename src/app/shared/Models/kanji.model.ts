import { Example } from "@models/example.model";
import { Generic } from "@models/generic.model";


export interface Kanji {
  id?: number;
  char?: string;
  image?: string;
  jlpt?: number;
  checked?: boolean;
  successes?: number;
  attempts?: number;

  meanings?: Generic[];
  names?: KanjiGeneric[];
  kuns?: KanjiGeneric[];
  ons?: KanjiGeneric[];
  examples?: Example[];
}

export interface KanjiGeneric extends Generic {
  kanjiId?: number;
}
