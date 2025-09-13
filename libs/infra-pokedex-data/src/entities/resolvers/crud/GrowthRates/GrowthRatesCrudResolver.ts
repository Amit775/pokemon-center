import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateGrowthRatesArgs } from "./args/AggregateGrowthRatesArgs";
import { FindFirstGrowthRatesArgs } from "./args/FindFirstGrowthRatesArgs";
import { FindFirstGrowthRatesOrThrowArgs } from "./args/FindFirstGrowthRatesOrThrowArgs";
import { FindManyGrowthRatesArgs } from "./args/FindManyGrowthRatesArgs";
import { FindUniqueGrowthRatesArgs } from "./args/FindUniqueGrowthRatesArgs";
import { FindUniqueGrowthRatesOrThrowArgs } from "./args/FindUniqueGrowthRatesOrThrowArgs";
import { GroupByGrowthRatesArgs } from "./args/GroupByGrowthRatesArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { GrowthRates } from "../../../models/GrowthRates";
import { AggregateGrowthRates } from "../../outputs/AggregateGrowthRates";
import { GrowthRatesGroupBy } from "../../outputs/GrowthRatesGroupBy";

@TypeGraphQL.Resolver(_of => GrowthRates)
export class GrowthRatesCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateGrowthRates, {
    nullable: false
  })
  async aggregateGrowthRates(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateGrowthRatesArgs): Promise<AggregateGrowthRates> {
    return getPrismaFromContext(ctx).growthRates.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Query(_returns => GrowthRates, {
    nullable: true
  })
  async findFirstGrowthRates(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstGrowthRatesArgs): Promise<GrowthRates | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).growthRates.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => GrowthRates, {
    nullable: true
  })
  async findFirstGrowthRatesOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstGrowthRatesOrThrowArgs): Promise<GrowthRates | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).growthRates.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [GrowthRates], {
    nullable: false
  })
  async findManyGrowthRates(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyGrowthRatesArgs): Promise<GrowthRates[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).growthRates.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => GrowthRates, {
    nullable: true
  })
  async findUniqueGrowthRates(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueGrowthRatesArgs): Promise<GrowthRates | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).growthRates.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => GrowthRates, {
    nullable: true
  })
  async findUniqueGrowthRatesOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueGrowthRatesOrThrowArgs): Promise<GrowthRates | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).growthRates.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [GrowthRatesGroupBy], {
    nullable: false
  })
  async groupByGrowthRates(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByGrowthRatesArgs): Promise<GrowthRatesGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).growthRates.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

}