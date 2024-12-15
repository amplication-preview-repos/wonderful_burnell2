import { Calda as TCalda } from "../api/calda/Calda";

export const CALDA_TITLE_FIELD = "id";

export const CaldaTitle = (record: TCalda): string => {
  return record.id?.toString() || String(record.id);
};
