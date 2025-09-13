import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateMoveMetaArgs } from "./args/AggregateMoveMetaArgs";
import { FindFirstMoveMetaArgs } from "./args/FindFirstMoveMetaArgs";
import { FindFirstMoveMetaOrThrowArgs } from "./args/FindFirstMoveMetaOrThrowArgs";
import { FindManyMoveMetaArgs } from "./args/FindManyMoveMetaArgs";
import { FindUniqueMoveMetaArgs } from "./args/FindUniqueMoveMetaArgs";
import { FindUniqueMoveMetaOrThrowArgs } from "./args/FindUniqueMoveMetaOrThrowArgs";
import { GroupByMoveMetaArgs } from "./args/GroupByMoveMetaArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { MoveMeta } from "../../../models/MoveMeta";
import { AggregateMoveMeta } from "../../outputs/AggregateMoveMeta";
import { MoveMetaGroupBy } from "../../outputs/MoveMetaGroupBy";

@TypeGraphQL.Resolver(_of => MoveMeta)
export class MoveMetaCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateMoveMeta, {
    nullable: false
  })
  async aggregateMoveMeta(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateMoveMetaArgs): Promise<AggregateMoveMeta> {
    return getPrismaFromContext(ctx).moveMeta.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Query(_returns => MoveMeta, {
    nullable: true
  })
  async findFirstMoveMeta(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstMoveMetaArgs): Promise<MoveMeta | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveMeta.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => MoveMeta, {
    nullable: true
  })
  async findFirstMoveMetaOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstMoveMetaOrThrowArgs): Promise<MoveMeta | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveMeta.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [MoveMeta], {
    nullable: false
  })
  async moveMetas(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyMoveMetaArgs): Promise<MoveMeta[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveMeta.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => MoveMeta, {
    nullable: true
  })
  async moveMeta(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueMoveMetaArgs): Promise<MoveMeta | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveMeta.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => MoveMeta, {
    nullable: true
  })
  async getMoveMeta(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueMoveMetaOrThrowArgs): Promise<MoveMeta | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveMeta.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [MoveMetaGroupBy], {
    nullable: false
  })
  async groupByMoveMeta(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByMoveMetaArgs): Promise<MoveMetaGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveMeta.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

}