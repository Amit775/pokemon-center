import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByItemCategoryArgs } from "./args/GroupByItemCategoryArgs";
import { ItemCategory } from "../../../models/ItemCategory";
import { ItemCategoryGroupBy } from "../../outputs/ItemCategoryGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ItemCategory)
export class GroupByItemCategoryResolver {
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
