import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type AreaWhereInput = {
  fazenda?: StringNullableFilter;
  id?: StringFilter;
  nome?: StringNullableFilter;
};
