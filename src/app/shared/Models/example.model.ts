import { Generic } from "@models/generic.model";

export interface Example {
  id?: number;
  text?: string;
  value?: string | number;
  meanings?: Generic[];
  chars: Generic[];
}