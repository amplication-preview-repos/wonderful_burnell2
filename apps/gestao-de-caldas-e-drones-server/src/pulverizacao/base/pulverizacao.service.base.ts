/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Pulverizacao as PrismaPulverizacao } from "@prisma/client";

export class PulverizacaoServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.PulverizacaoCountArgs, "select">
  ): Promise<number> {
    return this.prisma.pulverizacao.count(args);
  }

  async pulverizacaos(
    args: Prisma.PulverizacaoFindManyArgs
  ): Promise<PrismaPulverizacao[]> {
    return this.prisma.pulverizacao.findMany(args);
  }
  async pulverizacao(
    args: Prisma.PulverizacaoFindUniqueArgs
  ): Promise<PrismaPulverizacao | null> {
    return this.prisma.pulverizacao.findUnique(args);
  }
  async createPulverizacao(
    args: Prisma.PulverizacaoCreateArgs
  ): Promise<PrismaPulverizacao> {
    return this.prisma.pulverizacao.create(args);
  }
  async updatePulverizacao(
    args: Prisma.PulverizacaoUpdateArgs
  ): Promise<PrismaPulverizacao> {
    return this.prisma.pulverizacao.update(args);
  }
  async deletePulverizacao(
    args: Prisma.PulverizacaoDeleteArgs
  ): Promise<PrismaPulverizacao> {
    return this.prisma.pulverizacao.delete(args);
  }
}
