import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateItemCategoryArgs } from "./args/AggregateItemCategoryArgs";
import { FindFirstItemCategoryArgs } from "./args/FindFirstItemCategoryArgs";
import { FindFirstItemCategoryOrThrowArgs } from "./args/FindFirstItemCategoryOrThrowArgs";
import { FindManyItemCategoryArgs } from "./args/FindManyItemCategoryArgs";
import { FindUniqueItemCategoryArgs } from "./args/FindUniqueItemCategoryArgs";
import { FindUniqueItemCategoryOrThrowArgs } from "./args/FindUniqueItemCategoryOrThrowArgs";
import { GroupByItemCategoryArgs } from "./args/GroupByItemCategoryArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { ItemCategory } from "../../../models/ItemCategory";
import { AggregateItemCategory } from "../../outputs/AggregateItemCategory";
import { ItemCategoryGroupBy } from "../../outputs/ItemCategoryGroupBy";

@TypeGraphQL.Resolver(_of => ItemCategory)
export class ItemCategoryCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateItemCategory, {
    nullable: false
  })
  async aggregateItemCategory(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateItemCategoryArgs): Promise<AggregateItemCategory> {
    return getPrismaFromContext(ctx).itemCategories.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Query(_returns => ItemCategory, {
    nullable: true
  })
  async findFirstItemCategory(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstItemCategoryArgs): Promise<ItemCategory | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).itemCategories.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => ItemCategory, {
    nullable: true
  })
  async findFirstItemCategoryOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstItemCategoryOrThrowArgs): Promise<ItemCategory | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).itemCategories.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [ItemCategory], {
    nullable: false
  })
  async itemCategories(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyItemCategoryArgs): Promise<ItemCategory[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).itemCategories.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => ItemCategory, {
    nullable: true
  })
  async itemCategory(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueItemCategoryArgs): Promise<ItemCategory | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).itemCategories.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => ItemCategory, {
    nullable: true
  })
  async getItemCategory(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueItemCategoryOrThrowArgs): Promise<ItemCategory | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).itemCategories.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [ItemCategoryGroupBy], {
    nullable: false
  })
  async groupByItemCategory(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByItemCategoryArgs): Promise<ItemCategoryGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).itemCategories.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

}