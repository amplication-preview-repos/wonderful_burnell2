import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PulverizacaoService } from "./pulverizacao.service";
import { PulverizacaoControllerBase } from "./base/pulverizacao.controller.base";

@swagger.ApiTags("pulverizacaos")
@common.Controller("pulverizacaos")
export class PulverizacaoController extends PulverizacaoControllerBase {
  constructor(protected readonly service: PulverizacaoService) {
    super(service);
  }
}
