import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateMoveFlagMapArgs } from "./args/AggregateMoveFlagMapArgs";
import { FindFirstMoveFlagMapArgs } from "./args/FindFirstMoveFlagMapArgs";
import { FindFirstMoveFlagMapOrThrowArgs } from "./args/FindFirstMoveFlagMapOrThrowArgs";
import { FindManyMoveFlagMapArgs } from "./args/FindManyMoveFlagMapArgs";
import { FindUniqueMoveFlagMapArgs } from "./args/FindUniqueMoveFlagMapArgs";
import { FindUniqueMoveFlagMapOrThrowArgs } from "./args/FindUniqueMoveFlagMapOrThrowArgs";
import { GroupByMoveFlagMapArgs } from "./args/GroupByMoveFlagMapArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { MoveFlagMap } from "../../../models/MoveFlagMap";
import { AggregateMoveFlagMap } from "../../outputs/AggregateMoveFlagMap";
import { MoveFlagMapGroupBy } from "../../outputs/MoveFlagMapGroupBy";

@TypeGraphQL.Resolver(_of => MoveFlagMap)
export class MoveFlagMapCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateMoveFlagMap, {
    nullable: false
  })
  async aggregateMoveFlagMap(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateMoveFlagMapArgs): Promise<AggregateMoveFlagMap> {
    return getPrismaFromContext(ctx).moveFlagMap.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Query(_returns => MoveFlagMap, {
    nullable: true
  })
  async findFirstMoveFlagMap(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstMoveFlagMapArgs): Promise<MoveFlagMap | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveFlagMap.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => MoveFlagMap, {
    nullable: true
  })
  async findFirstMoveFlagMapOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstMoveFlagMapOrThrowArgs): Promise<MoveFlagMap | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveFlagMap.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [MoveFlagMap], {
    nullable: false
  })
  async moveFlagMaps(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyMoveFlagMapArgs): Promise<MoveFlagMap[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveFlagMap.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => MoveFlagMap, {
    nullable: true
  })
  async moveFlagMap(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueMoveFlagMapArgs): Promise<MoveFlagMap | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveFlagMap.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => MoveFlagMap, {
    nullable: true
  })
  async getMoveFlagMap(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueMoveFlagMapOrThrowArgs): Promise<MoveFlagMap | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveFlagMap.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [MoveFlagMapGroupBy], {
    nullable: false
  })
  async groupByMoveFlagMap(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByMoveFlagMapArgs): Promise<MoveFlagMapGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveFlagMap.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

}