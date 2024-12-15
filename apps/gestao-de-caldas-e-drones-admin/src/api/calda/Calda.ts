import { Defensivos } from "../defensivos/Defensivos";

export type Calda = {
  createdAt: Date;
  defensivosItems?: Array<Defensivos>;
  id: string;
  updatedAt: Date;
};
