import * as graphql from "@nestjs/graphql";
import { CaldaResolverBase } from "./base/calda.resolver.base";
import { Calda } from "./base/Calda";
import { CaldaService } from "./calda.service";

@graphql.Resolver(() => Calda)
export class CaldaResolver extends CaldaResolverBase {
  constructor(protected readonly service: CaldaService) {
    super(service);
  }
}
