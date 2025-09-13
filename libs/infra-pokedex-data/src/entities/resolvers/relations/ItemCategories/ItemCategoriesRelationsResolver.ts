import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { ItemCategories } from "../../../models/ItemCategories";
import { ItemPockets } from "../../../models/ItemPockets";
import { Items } from "../../../models/Items";
import { ItemCategoriesItemsArgs } from "./args/ItemCategoriesItemsArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ItemCategories)
export class ItemCategoriesRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => ItemPockets, {
    nullable: false
  })
  async pocket(@TypeGraphQL.Root() itemCategories: ItemCategories, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<ItemPockets> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).itemCategories.findUniqueOrThrow({
      where: {
        id: itemCategories.id,
      },
    }).pocket({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [Items], {
    nullable: false
  })
  async items(@TypeGraphQL.Root() itemCategories: ItemCategories, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: ItemCategoriesItemsArgs): Promise<Items[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).itemCategories.findUniqueOrThrow({
      where: {
        id: itemCategories.id,
      },
    }).items({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
