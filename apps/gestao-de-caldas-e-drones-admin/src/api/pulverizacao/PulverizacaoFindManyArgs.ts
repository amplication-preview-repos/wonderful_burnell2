import { PulverizacaoWhereInput } from "./PulverizacaoWhereInput";
import { PulverizacaoOrderByInput } from "./PulverizacaoOrderByInput";

export type PulverizacaoFindManyArgs = {
  where?: PulverizacaoWhereInput;
  orderBy?: Array<PulverizacaoOrderByInput>;
  skip?: number;
  take?: number;
};
