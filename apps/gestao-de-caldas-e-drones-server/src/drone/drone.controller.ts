import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DroneService } from "./drone.service";
import { DroneControllerBase } from "./base/drone.controller.base";

@swagger.ApiTags("drones")
@common.Controller("drones")
export class DroneController extends DroneControllerBase {
  constructor(protected readonly service: DroneService) {
    super(service);
  }
}
