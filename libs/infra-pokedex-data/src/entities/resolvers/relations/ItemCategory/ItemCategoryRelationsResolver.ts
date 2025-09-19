import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Item } from "../../../models/Item";
import { ItemCategory } from "../../../models/ItemCategory";
import { ItemPocket } from "../../../models/ItemPocket";
import { ItemCategoryItemsArgs } from "./args/ItemCategoryItemsArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ItemCategory)
export class ItemCategoryRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => ItemPocket, {
    nullable: false
  })
  async pocket(@TypeGraphQL.Root() itemCategory: ItemCategory, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<ItemPocket> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).itemCategories.findUniqueOrThrow({
      where: {
        id: itemCategory.id,
      },
    }).pocket({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [Item], {
    nullable: false
  })
  async items(@TypeGraphQL.Root() itemCategory: ItemCategory, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: ItemCategoryItemsArgs): Promise<Item[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).itemCategories.findUniqueOrThrow({
      where: {
        id: itemCategory.id,
      },
    }).items({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
