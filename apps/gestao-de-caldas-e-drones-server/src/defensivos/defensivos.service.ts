import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DefensivosServiceBase } from "./base/defensivos.service.base";

@Injectable()
export class DefensivosService extends DefensivosServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
