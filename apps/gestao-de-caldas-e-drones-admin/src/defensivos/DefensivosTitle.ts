import { Defensivos as TDefensivos } from "../api/defensivos/Defensivos";

export const DEFENSIVOS_TITLE_FIELD = "nome";

export const DefensivosTitle = (record: TDefensivos): string => {
  return record.nome?.toString() || String(record.id);
};
