import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DefensivosService } from "./defensivos.service";
import { DefensivosControllerBase } from "./base/defensivos.controller.base";

@swagger.ApiTags("defensivos")
@common.Controller("defensivos")
export class DefensivosController extends DefensivosControllerBase {
  constructor(protected readonly service: DefensivosService) {
    super(service);
  }
}
