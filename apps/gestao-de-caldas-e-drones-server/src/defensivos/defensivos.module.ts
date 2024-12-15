import { Module } from "@nestjs/common";
import { DefensivosModuleBase } from "./base/defensivos.module.base";
import { DefensivosService } from "./defensivos.service";
import { DefensivosController } from "./defensivos.controller";
import { DefensivosResolver } from "./defensivos.resolver";

@Module({
  imports: [DefensivosModuleBase],
  controllers: [DefensivosController],
  providers: [DefensivosService, DefensivosResolver],
  exports: [DefensivosService],
})
export class DefensivosModule {}
