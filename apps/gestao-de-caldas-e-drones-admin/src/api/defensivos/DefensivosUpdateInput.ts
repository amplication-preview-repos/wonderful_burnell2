import { CaldaWhereUniqueInput } from "../calda/CaldaWhereUniqueInput";

export type DefensivosUpdateInput = {
  calda?: CaldaWhereUniqueInput | null;
  descricao?: string | null;
  nome?: string | null;
  tipo?: string | null;
};
