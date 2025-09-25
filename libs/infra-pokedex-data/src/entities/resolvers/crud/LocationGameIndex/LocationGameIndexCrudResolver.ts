import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateLocationGameIndexArgs } from "./args/AggregateLocationGameIndexArgs";
import { FindFirstLocationGameIndexArgs } from "./args/FindFirstLocationGameIndexArgs";
import { FindFirstLocationGameIndexOrThrowArgs } from "./args/FindFirstLocationGameIndexOrThrowArgs";
import { FindManyLocationGameIndexArgs } from "./args/FindManyLocationGameIndexArgs";
import { FindUniqueLocationGameIndexArgs } from "./args/FindUniqueLocationGameIndexArgs";
import { FindUniqueLocationGameIndexOrThrowArgs } from "./args/FindUniqueLocationGameIndexOrThrowArgs";
import { GroupByLocationGameIndexArgs } from "./args/GroupByLocationGameIndexArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { LocationGameIndex } from "../../../models/LocationGameIndex";
import { AggregateLocationGameIndex } from "../../outputs/AggregateLocationGameIndex";
import { LocationGameIndexGroupBy } from "../../outputs/LocationGameIndexGroupBy";

@TypeGraphQL.Resolver(_of => LocationGameIndex)
export class LocationGameIndexCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateLocationGameIndex, {
    nullable: false
  })
  async aggregateLocationGameIndex(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateLocationGameIndexArgs): Promise<AggregateLocationGameIndex> {
    return getPrismaFromContext(ctx).locationGameIndices.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Query(_returns => LocationGameIndex, {
    nullable: true
  })
  async findFirstLocationGameIndex(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstLocationGameIndexArgs): Promise<LocationGameIndex | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).locationGameIndices.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => LocationGameIndex, {
    nullable: true
  })
  async findFirstLocationGameIndexOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstLocationGameIndexOrThrowArgs): Promise<LocationGameIndex | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).locationGameIndices.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [LocationGameIndex], {
    nullable: false
  })
  async locationGameIndices(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyLocationGameIndexArgs): Promise<LocationGameIndex[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).locationGameIndices.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => LocationGameIndex, {
    nullable: true
  })
  async locationGameIndex(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueLocationGameIndexArgs): Promise<LocationGameIndex | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).locationGameIndices.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => LocationGameIndex, {
    nullable: true
  })
  async getLocationGameIndex(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueLocationGameIndexOrThrowArgs): Promise<LocationGameIndex | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).locationGameIndices.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [LocationGameIndexGroupBy], {
    nullable: false
  })
  async groupByLocationGameIndex(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByLocationGameIndexArgs): Promise<LocationGameIndexGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).locationGameIndices.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

}