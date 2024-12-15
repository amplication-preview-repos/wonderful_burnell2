import { Module } from "@nestjs/common";
import { CaldaModuleBase } from "./base/calda.module.base";
import { CaldaService } from "./calda.service";
import { CaldaController } from "./calda.controller";
import { CaldaResolver } from "./calda.resolver";

@Module({
  imports: [CaldaModuleBase],
  controllers: [CaldaController],
  providers: [CaldaService, CaldaResolver],
  exports: [CaldaService],
})
export class CaldaModule {}
