import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateItemCategoriesArgs } from "./args/AggregateItemCategoriesArgs";
import { FindFirstItemCategoriesArgs } from "./args/FindFirstItemCategoriesArgs";
import { FindFirstItemCategoriesOrThrowArgs } from "./args/FindFirstItemCategoriesOrThrowArgs";
import { FindManyItemCategoriesArgs } from "./args/FindManyItemCategoriesArgs";
import { FindUniqueItemCategoriesArgs } from "./args/FindUniqueItemCategoriesArgs";
import { FindUniqueItemCategoriesOrThrowArgs } from "./args/FindUniqueItemCategoriesOrThrowArgs";
import { GroupByItemCategoriesArgs } from "./args/GroupByItemCategoriesArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { ItemCategories } from "../../../models/ItemCategories";
import { AggregateItemCategories } from "../../outputs/AggregateItemCategories";
import { ItemCategoriesGroupBy } from "../../outputs/ItemCategoriesGroupBy";

@TypeGraphQL.Resolver(_of => ItemCategories)
export class ItemCategoriesCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateItemCategories, {
    nullable: false
  })
  async aggregateItemCategories(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateItemCategoriesArgs): Promise<AggregateItemCategories> {
    return getPrismaFromContext(ctx).itemCategories.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Query(_returns => ItemCategories, {
    nullable: true
  })
  async findFirstItemCategories(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstItemCategoriesArgs): Promise<ItemCategories | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).itemCategories.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => ItemCategories, {
    nullable: true
  })
  async findFirstItemCategoriesOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstItemCategoriesOrThrowArgs): Promise<ItemCategories | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).itemCategories.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [ItemCategories], {
    nullable: false
  })
  async findManyItemCategories(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyItemCategoriesArgs): Promise<ItemCategories[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).itemCategories.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => ItemCategories, {
    nullable: true
  })
  async findUniqueItemCategories(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueItemCategoriesArgs): Promise<ItemCategories | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).itemCategories.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => ItemCategories, {
    nullable: true
  })
  async findUniqueItemCategoriesOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueItemCategoriesOrThrowArgs): Promise<ItemCategories | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).itemCategories.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [ItemCategoriesGroupBy], {
    nullable: false
  })
  async groupByItemCategories(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByItemCategoriesArgs): Promise<ItemCategoriesGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).itemCategories.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

}