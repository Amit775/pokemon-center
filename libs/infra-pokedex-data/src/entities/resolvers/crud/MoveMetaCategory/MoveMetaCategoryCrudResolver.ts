import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateMoveMetaCategoryArgs } from "./args/AggregateMoveMetaCategoryArgs";
import { FindFirstMoveMetaCategoryArgs } from "./args/FindFirstMoveMetaCategoryArgs";
import { FindFirstMoveMetaCategoryOrThrowArgs } from "./args/FindFirstMoveMetaCategoryOrThrowArgs";
import { FindManyMoveMetaCategoryArgs } from "./args/FindManyMoveMetaCategoryArgs";
import { FindUniqueMoveMetaCategoryArgs } from "./args/FindUniqueMoveMetaCategoryArgs";
import { FindUniqueMoveMetaCategoryOrThrowArgs } from "./args/FindUniqueMoveMetaCategoryOrThrowArgs";
import { GroupByMoveMetaCategoryArgs } from "./args/GroupByMoveMetaCategoryArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { MoveMetaCategory } from "../../../models/MoveMetaCategory";
import { AggregateMoveMetaCategory } from "../../outputs/AggregateMoveMetaCategory";
import { MoveMetaCategoryGroupBy } from "../../outputs/MoveMetaCategoryGroupBy";

@TypeGraphQL.Resolver(_of => MoveMetaCategory)
export class MoveMetaCategoryCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateMoveMetaCategory, {
    nullable: false
  })
  async aggregateMoveMetaCategory(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateMoveMetaCategoryArgs): Promise<AggregateMoveMetaCategory> {
    return getPrismaFromContext(ctx).moveMetaCategories.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Query(_returns => MoveMetaCategory, {
    nullable: true
  })
  async findFirstMoveMetaCategory(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstMoveMetaCategoryArgs): Promise<MoveMetaCategory | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveMetaCategories.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => MoveMetaCategory, {
    nullable: true
  })
  async findFirstMoveMetaCategoryOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstMoveMetaCategoryOrThrowArgs): Promise<MoveMetaCategory | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveMetaCategories.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [MoveMetaCategory], {
    nullable: false
  })
  async moveMetaCategories(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyMoveMetaCategoryArgs): Promise<MoveMetaCategory[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveMetaCategories.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => MoveMetaCategory, {
    nullable: true
  })
  async moveMetaCategory(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueMoveMetaCategoryArgs): Promise<MoveMetaCategory | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveMetaCategories.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => MoveMetaCategory, {
    nullable: true
  })
  async getMoveMetaCategory(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueMoveMetaCategoryOrThrowArgs): Promise<MoveMetaCategory | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveMetaCategories.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [MoveMetaCategoryGroupBy], {
    nullable: false
  })
  async groupByMoveMetaCategory(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByMoveMetaCategoryArgs): Promise<MoveMetaCategoryGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveMetaCategories.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

}