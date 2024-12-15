/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { PulverizacaoService } from "../pulverizacao.service";
import { PulverizacaoCreateInput } from "./PulverizacaoCreateInput";
import { Pulverizacao } from "./Pulverizacao";
import { PulverizacaoFindManyArgs } from "./PulverizacaoFindManyArgs";
import { PulverizacaoWhereUniqueInput } from "./PulverizacaoWhereUniqueInput";
import { PulverizacaoUpdateInput } from "./PulverizacaoUpdateInput";

export class PulverizacaoControllerBase {
  constructor(protected readonly service: PulverizacaoService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Pulverizacao })
  async createPulverizacao(
    @common.Body() data: PulverizacaoCreateInput
  ): Promise<Pulverizacao> {
    return await this.service.createPulverizacao({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Pulverizacao] })
  @ApiNestedQuery(PulverizacaoFindManyArgs)
  async pulverizacaos(@common.Req() request: Request): Promise<Pulverizacao[]> {
    const args = plainToClass(PulverizacaoFindManyArgs, request.query);
    return this.service.pulverizacaos({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Pulverizacao })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async pulverizacao(
    @common.Param() params: PulverizacaoWhereUniqueInput
  ): Promise<Pulverizacao | null> {
    const result = await this.service.pulverizacao({
      where: params,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Pulverizacao })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updatePulverizacao(
    @common.Param() params: PulverizacaoWhereUniqueInput,
    @common.Body() data: PulverizacaoUpdateInput
  ): Promise<Pulverizacao | null> {
    try {
      return await this.service.updatePulverizacao({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Pulverizacao })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deletePulverizacao(
    @common.Param() params: PulverizacaoWhereUniqueInput
  ): Promise<Pulverizacao | null> {
    try {
      return await this.service.deletePulverizacao({
        where: params,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
