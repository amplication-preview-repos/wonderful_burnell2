import { Pulverizacao as TPulverizacao } from "../api/pulverizacao/Pulverizacao";

export const PULVERIZACAO_TITLE_FIELD = "id";

export const PulverizacaoTitle = (record: TPulverizacao): string => {
  return record.id?.toString() || String(record.id);
};
