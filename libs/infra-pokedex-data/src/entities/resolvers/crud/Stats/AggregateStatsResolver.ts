import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateStatsArgs } from "./args/AggregateStatsArgs";
import { Stats } from "../../../models/Stats";
import { AggregateStats } from "../../outputs/AggregateStats";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Stats)
export class AggregateStatsResolver {
  @TypeGraphQL.Query(_returns => AggregateStats, {
    nullable: false
  })
  async aggregateStats(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateStatsArgs): Promise<AggregateStats> {
    return getPrismaFromContext(ctx).stats.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
