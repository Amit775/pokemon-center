import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateLocationAreaArgs } from "./args/AggregateLocationAreaArgs";
import { FindFirstLocationAreaArgs } from "./args/FindFirstLocationAreaArgs";
import { FindFirstLocationAreaOrThrowArgs } from "./args/FindFirstLocationAreaOrThrowArgs";
import { FindManyLocationAreaArgs } from "./args/FindManyLocationAreaArgs";
import { FindUniqueLocationAreaArgs } from "./args/FindUniqueLocationAreaArgs";
import { FindUniqueLocationAreaOrThrowArgs } from "./args/FindUniqueLocationAreaOrThrowArgs";
import { GroupByLocationAreaArgs } from "./args/GroupByLocationAreaArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { LocationArea } from "../../../models/LocationArea";
import { AggregateLocationArea } from "../../outputs/AggregateLocationArea";
import { LocationAreaGroupBy } from "../../outputs/LocationAreaGroupBy";

@TypeGraphQL.Resolver(_of => LocationArea)
export class LocationAreaCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateLocationArea, {
    nullable: false
  })
  async aggregateLocationArea(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateLocationAreaArgs): Promise<AggregateLocationArea> {
    return getPrismaFromContext(ctx).locationAreas.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Query(_returns => LocationArea, {
    nullable: true
  })
  async findFirstLocationArea(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstLocationAreaArgs): Promise<LocationArea | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).locationAreas.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => LocationArea, {
    nullable: true
  })
  async findFirstLocationAreaOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstLocationAreaOrThrowArgs): Promise<LocationArea | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).locationAreas.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [LocationArea], {
    nullable: false
  })
  async locationAreas(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyLocationAreaArgs): Promise<LocationArea[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).locationAreas.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => LocationArea, {
    nullable: true
  })
  async locationArea(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueLocationAreaArgs): Promise<LocationArea | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).locationAreas.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => LocationArea, {
    nullable: true
  })
  async getLocationArea(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueLocationAreaOrThrowArgs): Promise<LocationArea | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).locationAreas.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [LocationAreaGroupBy], {
    nullable: false
  })
  async groupByLocationArea(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByLocationAreaArgs): Promise<LocationAreaGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).locationAreas.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

}