import { Calda } from "../calda/Calda";

export type Defensivos = {
  calda?: Calda | null;
  createdAt: Date;
  descricao: string | null;
  id: string;
  nome: string | null;
  tipo: string | null;
  updatedAt: Date;
};
