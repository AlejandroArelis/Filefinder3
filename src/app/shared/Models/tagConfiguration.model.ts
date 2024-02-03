import { Generic } from './generic.model';
import { KanjiGeneric } from './kanji.model';

export type TagConfiguration = {
  parentId: number;
  controllerUrl?: string;
  data?: Generic[];
  actual?: KanjiGeneric;
};
