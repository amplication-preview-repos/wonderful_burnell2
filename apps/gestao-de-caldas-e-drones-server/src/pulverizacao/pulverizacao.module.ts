import { Module } from "@nestjs/common";
import { PulverizacaoModuleBase } from "./base/pulverizacao.module.base";
import { PulverizacaoService } from "./pulverizacao.service";
import { PulverizacaoController } from "./pulverizacao.controller";
import { PulverizacaoResolver } from "./pulverizacao.resolver";

@Module({
  imports: [PulverizacaoModuleBase],
  controllers: [PulverizacaoController],
  providers: [PulverizacaoService, PulverizacaoResolver],
  exports: [PulverizacaoService],
})
export class PulverizacaoModule {}
