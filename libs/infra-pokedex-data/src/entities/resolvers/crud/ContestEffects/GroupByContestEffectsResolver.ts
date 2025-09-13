import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByContestEffectsArgs } from "./args/GroupByContestEffectsArgs";
import { ContestEffects } from "../../../models/ContestEffects";
import { ContestEffectsGroupBy } from "../../outputs/ContestEffectsGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ContestEffects)
export class GroupByContestEffectsResolver {
  @TypeGraphQL.Query(_returns => [ContestEffectsGroupBy], {
    nullable: false
  })
  async groupByContestEffects(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByContestEffectsArgs): Promise<ContestEffectsGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).contestEffects.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
