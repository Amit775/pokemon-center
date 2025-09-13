import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateMoveMetaCategoriesArgs } from "./args/AggregateMoveMetaCategoriesArgs";
import { FindFirstMoveMetaCategoriesArgs } from "./args/FindFirstMoveMetaCategoriesArgs";
import { FindFirstMoveMetaCategoriesOrThrowArgs } from "./args/FindFirstMoveMetaCategoriesOrThrowArgs";
import { FindManyMoveMetaCategoriesArgs } from "./args/FindManyMoveMetaCategoriesArgs";
import { FindUniqueMoveMetaCategoriesArgs } from "./args/FindUniqueMoveMetaCategoriesArgs";
import { FindUniqueMoveMetaCategoriesOrThrowArgs } from "./args/FindUniqueMoveMetaCategoriesOrThrowArgs";
import { GroupByMoveMetaCategoriesArgs } from "./args/GroupByMoveMetaCategoriesArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { MoveMetaCategories } from "../../../models/MoveMetaCategories";
import { AggregateMoveMetaCategories } from "../../outputs/AggregateMoveMetaCategories";
import { MoveMetaCategoriesGroupBy } from "../../outputs/MoveMetaCategoriesGroupBy";

@TypeGraphQL.Resolver(_of => MoveMetaCategories)
export class MoveMetaCategoriesCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateMoveMetaCategories, {
    nullable: false
  })
  async aggregateMoveMetaCategories(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateMoveMetaCategoriesArgs): Promise<AggregateMoveMetaCategories> {
    return getPrismaFromContext(ctx).moveMetaCategories.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Query(_returns => MoveMetaCategories, {
    nullable: true
  })
  async findFirstMoveMetaCategories(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstMoveMetaCategoriesArgs): Promise<MoveMetaCategories | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveMetaCategories.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => MoveMetaCategories, {
    nullable: true
  })
  async findFirstMoveMetaCategoriesOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstMoveMetaCategoriesOrThrowArgs): Promise<MoveMetaCategories | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveMetaCategories.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [MoveMetaCategories], {
    nullable: false
  })
  async findManyMoveMetaCategories(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyMoveMetaCategoriesArgs): Promise<MoveMetaCategories[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveMetaCategories.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => MoveMetaCategories, {
    nullable: true
  })
  async findUniqueMoveMetaCategories(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueMoveMetaCategoriesArgs): Promise<MoveMetaCategories | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveMetaCategories.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => MoveMetaCategories, {
    nullable: true
  })
  async findUniqueMoveMetaCategoriesOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueMoveMetaCategoriesOrThrowArgs): Promise<MoveMetaCategories | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveMetaCategories.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [MoveMetaCategoriesGroupBy], {
    nullable: false
  })
  async groupByMoveMetaCategories(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByMoveMetaCategoriesArgs): Promise<MoveMetaCategoriesGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveMetaCategories.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

}