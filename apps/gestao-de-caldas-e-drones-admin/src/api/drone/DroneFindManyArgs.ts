import { DroneWhereInput } from "./DroneWhereInput";
import { DroneOrderByInput } from "./DroneOrderByInput";

export type DroneFindManyArgs = {
  where?: DroneWhereInput;
  orderBy?: Array<DroneOrderByInput>;
  skip?: number;
  take?: number;
};
