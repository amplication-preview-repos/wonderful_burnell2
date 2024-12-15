/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Area as PrismaArea } from "@prisma/client";

export class AreaServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.AreaCountArgs, "select">): Promise<number> {
    return this.prisma.area.count(args);
  }

  async areas(args: Prisma.AreaFindManyArgs): Promise<PrismaArea[]> {
    return this.prisma.area.findMany(args);
  }
  async area(args: Prisma.AreaFindUniqueArgs): Promise<PrismaArea | null> {
    return this.prisma.area.findUnique(args);
  }
  async createArea(args: Prisma.AreaCreateArgs): Promise<PrismaArea> {
    return this.prisma.area.create(args);
  }
  async updateArea(args: Prisma.AreaUpdateArgs): Promise<PrismaArea> {
    return this.prisma.area.update(args);
  }
  async deleteArea(args: Prisma.AreaDeleteArgs): Promise<PrismaArea> {
    return this.prisma.area.delete(args);
  }
}
