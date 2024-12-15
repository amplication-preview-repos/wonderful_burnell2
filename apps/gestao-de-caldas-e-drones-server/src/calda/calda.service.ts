import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CaldaServiceBase } from "./base/calda.service.base";

@Injectable()
export class CaldaService extends CaldaServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
