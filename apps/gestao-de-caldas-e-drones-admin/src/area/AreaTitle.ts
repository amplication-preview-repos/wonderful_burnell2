import { Area as TArea } from "../api/area/Area";

export const AREA_TITLE_FIELD = "fazenda";

export const AreaTitle = (record: TArea): string => {
  return record.fazenda?.toString() || String(record.id);
};
