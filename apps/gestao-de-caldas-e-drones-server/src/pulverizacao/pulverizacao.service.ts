import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PulverizacaoServiceBase } from "./base/pulverizacao.service.base";

@Injectable()
export class PulverizacaoService extends PulverizacaoServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
