import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByItemCategoriesArgs } from "./args/GroupByItemCategoriesArgs";
import { ItemCategories } from "../../../models/ItemCategories";
import { ItemCategoriesGroupBy } from "../../outputs/ItemCategoriesGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ItemCategories)
export class GroupByItemCategoriesResolver {
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
