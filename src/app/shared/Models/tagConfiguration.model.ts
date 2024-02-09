import { Generic } from '@models/generic.model';
import { KanjiGeneric } from '@models/kanji.model';

export interface TagConfiguration {
  parentId?: number;
  tagStyle?: boolean;
  controllerUrl?: string;
  data?: Generic[];
  actual?: KanjiGeneric;
  title?: string;
};
