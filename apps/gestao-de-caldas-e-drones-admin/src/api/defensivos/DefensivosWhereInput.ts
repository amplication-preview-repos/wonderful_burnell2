import { CaldaWhereUniqueInput } from "../calda/CaldaWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type DefensivosWhereInput = {
  calda?: CaldaWhereUniqueInput;
  descricao?: StringNullableFilter;
  id?: StringFilter;
  nome?: StringNullableFilter;
  tipo?: StringNullableFilter;
};
