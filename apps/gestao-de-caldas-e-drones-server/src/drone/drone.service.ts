import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DroneServiceBase } from "./base/drone.service.base";

@Injectable()
export class DroneService extends DroneServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
