import { Generic } from '@models/generic.model';
import { KanjiGeneric } from '@models/kanji.model';

export interface TagConfiguration {
  parentId: number;
  controllerUrl?: string;
  data?: Generic[];
  actual?: KanjiGeneric;
};
