import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateSuperContestEffectArgs } from "./args/AggregateSuperContestEffectArgs";
import { SuperContestEffect } from "../../../models/SuperContestEffect";
import { AggregateSuperContestEffect } from "../../outputs/AggregateSuperContestEffect";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SuperContestEffect)
export class AggregateSuperContestEffectResolver {
  @TypeGraphQL.Query(_returns => AggregateSuperContestEffect, {
    nullable: false
  })
  async aggregateSuperContestEffect(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateSuperContestEffectArgs): Promise<AggregateSuperContestEffect> {
    return getPrismaFromContext(ctx).superContestEffects.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
