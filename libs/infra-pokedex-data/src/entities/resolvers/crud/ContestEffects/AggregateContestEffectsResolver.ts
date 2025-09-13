import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateContestEffectsArgs } from "./args/AggregateContestEffectsArgs";
import { ContestEffects } from "../../../models/ContestEffects";
import { AggregateContestEffects } from "../../outputs/AggregateContestEffects";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ContestEffects)
export class AggregateContestEffectsResolver {
  @TypeGraphQL.Query(_returns => AggregateContestEffects, {
    nullable: false
  })
  async aggregateContestEffects(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateContestEffectsArgs): Promise<AggregateContestEffects> {
    return getPrismaFromContext(ctx).contestEffects.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
