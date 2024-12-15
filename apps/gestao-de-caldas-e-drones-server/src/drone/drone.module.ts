import { Module } from "@nestjs/common";
import { DroneModuleBase } from "./base/drone.module.base";
import { DroneService } from "./drone.service";
import { DroneController } from "./drone.controller";
import { DroneResolver } from "./drone.resolver";

@Module({
  imports: [DroneModuleBase],
  controllers: [DroneController],
  providers: [DroneService, DroneResolver],
  exports: [DroneService],
})
export class DroneModule {}
