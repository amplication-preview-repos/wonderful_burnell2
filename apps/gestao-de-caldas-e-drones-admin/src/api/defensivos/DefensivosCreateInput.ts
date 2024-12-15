import { CaldaWhereUniqueInput } from "../calda/CaldaWhereUniqueInput";

export type DefensivosCreateInput = {
  calda?: CaldaWhereUniqueInput | null;
  descricao?: string | null;
  nome?: string | null;
  tipo?: string | null;
};
