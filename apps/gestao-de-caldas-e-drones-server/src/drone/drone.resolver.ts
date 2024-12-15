import * as graphql from "@nestjs/graphql";
import { DroneResolverBase } from "./base/drone.resolver.base";
import { Drone } from "./base/Drone";
import { DroneService } from "./drone.service";

@graphql.Resolver(() => Drone)
export class DroneResolver extends DroneResolverBase {
  constructor(protected readonly service: DroneService) {
    super(service);
  }
}
