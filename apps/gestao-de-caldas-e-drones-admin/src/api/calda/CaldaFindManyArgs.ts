import { CaldaWhereInput } from "./CaldaWhereInput";
import { CaldaOrderByInput } from "./CaldaOrderByInput";

export type CaldaFindManyArgs = {
  where?: CaldaWhereInput;
  orderBy?: Array<CaldaOrderByInput>;
  skip?: number;
  take?: number;
};
