import { Drone as TDrone } from "../api/drone/Drone";

export const DRONE_TITLE_FIELD = "id";

export const DroneTitle = (record: TDrone): string => {
  return record.id?.toString() || String(record.id);
};
