import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateLocationAreaEncounterRateArgs } from "./args/AggregateLocationAreaEncounterRateArgs";
import { FindFirstLocationAreaEncounterRateArgs } from "./args/FindFirstLocationAreaEncounterRateArgs";
import { FindFirstLocationAreaEncounterRateOrThrowArgs } from "./args/FindFirstLocationAreaEncounterRateOrThrowArgs";
import { FindManyLocationAreaEncounterRateArgs } from "./args/FindManyLocationAreaEncounterRateArgs";
import { FindUniqueLocationAreaEncounterRateArgs } from "./args/FindUniqueLocationAreaEncounterRateArgs";
import { FindUniqueLocationAreaEncounterRateOrThrowArgs } from "./args/FindUniqueLocationAreaEncounterRateOrThrowArgs";
import { GroupByLocationAreaEncounterRateArgs } from "./args/GroupByLocationAreaEncounterRateArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { LocationAreaEncounterRate } from "../../../models/LocationAreaEncounterRate";
import { AggregateLocationAreaEncounterRate } from "../../outputs/AggregateLocationAreaEncounterRate";
import { LocationAreaEncounterRateGroupBy } from "../../outputs/LocationAreaEncounterRateGroupBy";

@TypeGraphQL.Resolver(_of => LocationAreaEncounterRate)
export class LocationAreaEncounterRateCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateLocationAreaEncounterRate, {
    nullable: false
  })
  async aggregateLocationAreaEncounterRate(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateLocationAreaEncounterRateArgs): Promise<AggregateLocationAreaEncounterRate> {
    return getPrismaFromContext(ctx).locationAreaEncounterRates.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Query(_returns => LocationAreaEncounterRate, {
    nullable: true
  })
  async findFirstLocationAreaEncounterRate(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstLocationAreaEncounterRateArgs): Promise<LocationAreaEncounterRate | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).locationAreaEncounterRates.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => LocationAreaEncounterRate, {
    nullable: true
  })
  async findFirstLocationAreaEncounterRateOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstLocationAreaEncounterRateOrThrowArgs): Promise<LocationAreaEncounterRate | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).locationAreaEncounterRates.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [LocationAreaEncounterRate], {
    nullable: false
  })
  async locationAreaEncounterRates(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyLocationAreaEncounterRateArgs): Promise<LocationAreaEncounterRate[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).locationAreaEncounterRates.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => LocationAreaEncounterRate, {
    nullable: true
  })
  async locationAreaEncounterRate(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueLocationAreaEncounterRateArgs): Promise<LocationAreaEncounterRate | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).locationAreaEncounterRates.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => LocationAreaEncounterRate, {
    nullable: true
  })
  async getLocationAreaEncounterRate(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueLocationAreaEncounterRateOrThrowArgs): Promise<LocationAreaEncounterRate | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).locationAreaEncounterRates.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [LocationAreaEncounterRateGroupBy], {
    nullable: false
  })
  async groupByLocationAreaEncounterRate(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByLocationAreaEncounterRateArgs): Promise<LocationAreaEncounterRateGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).locationAreaEncounterRates.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

}