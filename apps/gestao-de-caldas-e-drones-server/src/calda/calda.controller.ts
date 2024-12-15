import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CaldaService } from "./calda.service";
import { CaldaControllerBase } from "./base/calda.controller.base";

@swagger.ApiTags("caldas")
@common.Controller("caldas")
export class CaldaController extends CaldaControllerBase {
  constructor(protected readonly service: CaldaService) {
    super(service);
  }
}
