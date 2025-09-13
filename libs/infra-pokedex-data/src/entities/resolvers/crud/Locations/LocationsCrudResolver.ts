import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateLocationsArgs } from "./args/AggregateLocationsArgs";
import { FindFirstLocationsArgs } from "./args/FindFirstLocationsArgs";
import { FindFirstLocationsOrThrowArgs } from "./args/FindFirstLocationsOrThrowArgs";
import { FindManyLocationsArgs } from "./args/FindManyLocationsArgs";
import { FindUniqueLocationsArgs } from "./args/FindUniqueLocationsArgs";
import { FindUniqueLocationsOrThrowArgs } from "./args/FindUniqueLocationsOrThrowArgs";
import { GroupByLocationsArgs } from "./args/GroupByLocationsArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { Locations } from "../../../models/Locations";
import { AggregateLocations } from "../../outputs/AggregateLocations";
import { LocationsGroupBy } from "../../outputs/LocationsGroupBy";

@TypeGraphQL.Resolver(_of => Locations)
export class LocationsCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateLocations, {
    nullable: false
  })
  async aggregateLocations(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateLocationsArgs): Promise<AggregateLocations> {
    return getPrismaFromContext(ctx).locations.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Query(_returns => Locations, {
    nullable: true
  })
  async findFirstLocations(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstLocationsArgs): Promise<Locations | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).locations.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Locations, {
    nullable: true
  })
  async findFirstLocationsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstLocationsOrThrowArgs): Promise<Locations | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).locations.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [Locations], {
    nullable: false
  })
  async findManyLocations(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyLocationsArgs): Promise<Locations[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).locations.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Locations, {
    nullable: true
  })
  async findUniqueLocations(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueLocationsArgs): Promise<Locations | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).locations.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Locations, {
    nullable: true
  })
  async findUniqueLocationsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueLocationsOrThrowArgs): Promise<Locations | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).locations.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [LocationsGroupBy], {
    nullable: false
  })
  async groupByLocations(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByLocationsArgs): Promise<LocationsGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).locations.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

}