import * as graphql from "@nestjs/graphql";
import { DefensivosResolverBase } from "./base/defensivos.resolver.base";
import { Defensivos } from "./base/Defensivos";
import { DefensivosService } from "./defensivos.service";

@graphql.Resolver(() => Defensivos)
export class DefensivosResolver extends DefensivosResolverBase {
  constructor(protected readonly service: DefensivosService) {
    super(service);
  }
}
