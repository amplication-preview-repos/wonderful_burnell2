import { DefensivosListRelationFilter } from "../defensivos/DefensivosListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type CaldaWhereInput = {
  defensivosItems?: DefensivosListRelationFilter;
  id?: StringFilter;
};
