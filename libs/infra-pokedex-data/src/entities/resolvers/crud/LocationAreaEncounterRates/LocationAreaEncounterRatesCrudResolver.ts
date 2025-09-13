import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateLocationAreaEncounterRatesArgs } from "./args/AggregateLocationAreaEncounterRatesArgs";
import { FindFirstLocationAreaEncounterRatesArgs } from "./args/FindFirstLocationAreaEncounterRatesArgs";
import { FindFirstLocationAreaEncounterRatesOrThrowArgs } from "./args/FindFirstLocationAreaEncounterRatesOrThrowArgs";
import { FindManyLocationAreaEncounterRatesArgs } from "./args/FindManyLocationAreaEncounterRatesArgs";
import { FindUniqueLocationAreaEncounterRatesArgs } from "./args/FindUniqueLocationAreaEncounterRatesArgs";
import { FindUniqueLocationAreaEncounterRatesOrThrowArgs } from "./args/FindUniqueLocationAreaEncounterRatesOrThrowArgs";
import { GroupByLocationAreaEncounterRatesArgs } from "./args/GroupByLocationAreaEncounterRatesArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { LocationAreaEncounterRates } from "../../../models/LocationAreaEncounterRates";
import { AggregateLocationAreaEncounterRates } from "../../outputs/AggregateLocationAreaEncounterRates";
import { LocationAreaEncounterRatesGroupBy } from "../../outputs/LocationAreaEncounterRatesGroupBy";

@TypeGraphQL.Resolver(_of => LocationAreaEncounterRates)
export class LocationAreaEncounterRatesCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateLocationAreaEncounterRates, {
    nullable: false
  })
  async aggregateLocationAreaEncounterRates(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateLocationAreaEncounterRatesArgs): Promise<AggregateLocationAreaEncounterRates> {
    return getPrismaFromContext(ctx).locationAreaEncounterRates.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Query(_returns => LocationAreaEncounterRates, {
    nullable: true
  })
  async findFirstLocationAreaEncounterRates(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstLocationAreaEncounterRatesArgs): Promise<LocationAreaEncounterRates | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).locationAreaEncounterRates.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => LocationAreaEncounterRates, {
    nullable: true
  })
  async findFirstLocationAreaEncounterRatesOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstLocationAreaEncounterRatesOrThrowArgs): Promise<LocationAreaEncounterRates | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).locationAreaEncounterRates.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [LocationAreaEncounterRates], {
    nullable: false
  })
  async findManyLocationAreaEncounterRates(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyLocationAreaEncounterRatesArgs): Promise<LocationAreaEncounterRates[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).locationAreaEncounterRates.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => LocationAreaEncounterRates, {
    nullable: true
  })
  async findUniqueLocationAreaEncounterRates(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueLocationAreaEncounterRatesArgs): Promise<LocationAreaEncounterRates | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).locationAreaEncounterRates.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => LocationAreaEncounterRates, {
    nullable: true
  })
  async findUniqueLocationAreaEncounterRatesOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueLocationAreaEncounterRatesOrThrowArgs): Promise<LocationAreaEncounterRates | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).locationAreaEncounterRates.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [LocationAreaEncounterRatesGroupBy], {
    nullable: false
  })
  async groupByLocationAreaEncounterRates(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByLocationAreaEncounterRatesArgs): Promise<LocationAreaEncounterRatesGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).locationAreaEncounterRates.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

}