import * as graphql from "@nestjs/graphql";
import { PulverizacaoResolverBase } from "./base/pulverizacao.resolver.base";
import { Pulverizacao } from "./base/Pulverizacao";
import { PulverizacaoService } from "./pulverizacao.service";

@graphql.Resolver(() => Pulverizacao)
export class PulverizacaoResolver extends PulverizacaoResolverBase {
  constructor(protected readonly service: PulverizacaoService) {
    super(service);
  }
}
