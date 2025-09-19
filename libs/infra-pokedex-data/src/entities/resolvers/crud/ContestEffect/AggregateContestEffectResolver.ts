import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateContestEffectArgs } from "./args/AggregateContestEffectArgs";
import { ContestEffect } from "../../../models/ContestEffect";
import { AggregateContestEffect } from "../../outputs/AggregateContestEffect";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ContestEffect)
export class AggregateContestEffectResolver {
  @TypeGraphQL.Query(_returns => AggregateContestEffect, {
    nullable: false
  })
  async aggregateContestEffect(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateContestEffectArgs): Promise<AggregateContestEffect> {
    return getPrismaFromContext(ctx).contestEffects.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
