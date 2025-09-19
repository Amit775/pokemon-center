import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindManyItemCategoryArgs } from "./args/FindManyItemCategoryArgs";
import { ItemCategory } from "../../../models/ItemCategory";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ItemCategory)
export class FindManyItemCategoryResolver {
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
}
