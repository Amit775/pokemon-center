import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateLocationAreasArgs } from "./args/AggregateLocationAreasArgs";
import { FindFirstLocationAreasArgs } from "./args/FindFirstLocationAreasArgs";
import { FindFirstLocationAreasOrThrowArgs } from "./args/FindFirstLocationAreasOrThrowArgs";
import { FindManyLocationAreasArgs } from "./args/FindManyLocationAreasArgs";
import { FindUniqueLocationAreasArgs } from "./args/FindUniqueLocationAreasArgs";
import { FindUniqueLocationAreasOrThrowArgs } from "./args/FindUniqueLocationAreasOrThrowArgs";
import { GroupByLocationAreasArgs } from "./args/GroupByLocationAreasArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { LocationAreas } from "../../../models/LocationAreas";
import { AggregateLocationAreas } from "../../outputs/AggregateLocationAreas";
import { LocationAreasGroupBy } from "../../outputs/LocationAreasGroupBy";

@TypeGraphQL.Resolver(_of => LocationAreas)
export class LocationAreasCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateLocationAreas, {
    nullable: false
  })
  async aggregateLocationAreas(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateLocationAreasArgs): Promise<AggregateLocationAreas> {
    return getPrismaFromContext(ctx).locationAreas.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Query(_returns => LocationAreas, {
    nullable: true
  })
  async findFirstLocationAreas(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstLocationAreasArgs): Promise<LocationAreas | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).locationAreas.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => LocationAreas, {
    nullable: true
  })
  async findFirstLocationAreasOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstLocationAreasOrThrowArgs): Promise<LocationAreas | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).locationAreas.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [LocationAreas], {
    nullable: false
  })
  async findManyLocationAreas(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyLocationAreasArgs): Promise<LocationAreas[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).locationAreas.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => LocationAreas, {
    nullable: true
  })
  async findUniqueLocationAreas(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueLocationAreasArgs): Promise<LocationAreas | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).locationAreas.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => LocationAreas, {
    nullable: true
  })
  async findUniqueLocationAreasOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueLocationAreasOrThrowArgs): Promise<LocationAreas | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).locationAreas.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [LocationAreasGroupBy], {
    nullable: false
  })
  async groupByLocationAreas(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByLocationAreasArgs): Promise<LocationAreasGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).locationAreas.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

}