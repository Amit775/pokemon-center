import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateStatsArgs } from "./args/AggregateStatsArgs";
import { FindFirstStatsArgs } from "./args/FindFirstStatsArgs";
import { FindFirstStatsOrThrowArgs } from "./args/FindFirstStatsOrThrowArgs";
import { FindManyStatsArgs } from "./args/FindManyStatsArgs";
import { FindUniqueStatsArgs } from "./args/FindUniqueStatsArgs";
import { FindUniqueStatsOrThrowArgs } from "./args/FindUniqueStatsOrThrowArgs";
import { GroupByStatsArgs } from "./args/GroupByStatsArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { Stats } from "../../../models/Stats";
import { AggregateStats } from "../../outputs/AggregateStats";
import { StatsGroupBy } from "../../outputs/StatsGroupBy";

@TypeGraphQL.Resolver(_of => Stats)
export class StatsCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateStats, {
    nullable: false
  })
  async aggregateStats(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateStatsArgs): Promise<AggregateStats> {
    return getPrismaFromContext(ctx).stats.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Query(_returns => Stats, {
    nullable: true
  })
  async findFirstStats(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstStatsArgs): Promise<Stats | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).stats.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Stats, {
    nullable: true
  })
  async findFirstStatsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstStatsOrThrowArgs): Promise<Stats | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).stats.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [Stats], {
    nullable: false
  })
  async findManyStats(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyStatsArgs): Promise<Stats[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).stats.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Stats, {
    nullable: true
  })
  async findUniqueStats(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueStatsArgs): Promise<Stats | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).stats.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Stats, {
    nullable: true
  })
  async findUniqueStatsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueStatsOrThrowArgs): Promise<Stats | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).stats.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [StatsGroupBy], {
    nullable: false
  })
  async groupByStats(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByStatsArgs): Promise<StatsGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).stats.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

}