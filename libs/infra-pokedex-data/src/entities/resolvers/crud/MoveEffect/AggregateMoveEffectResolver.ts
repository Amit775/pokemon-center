import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateMoveEffectArgs } from "./args/AggregateMoveEffectArgs";
import { MoveEffect } from "../../../models/MoveEffect";
import { AggregateMoveEffect } from "../../outputs/AggregateMoveEffect";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MoveEffect)
export class AggregateMoveEffectResolver {
  @TypeGraphQL.Query(_returns => AggregateMoveEffect, {
    nullable: false
  })
  async aggregateMoveEffect(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateMoveEffectArgs): Promise<AggregateMoveEffect> {
    return getPrismaFromContext(ctx).moveEffects.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
