import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { ItemCategories } from "../../../models/ItemCategories";
import { ItemPockets } from "../../../models/ItemPockets";
import { ItemPocketsCategoriesArgs } from "./args/ItemPocketsCategoriesArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ItemPockets)
export class ItemPocketsRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [ItemCategories], {
    nullable: false
  })
  async categories(@TypeGraphQL.Root() itemPockets: ItemPockets, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: ItemPocketsCategoriesArgs): Promise<ItemCategories[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).itemPockets.findUniqueOrThrow({
      where: {
        id: itemPockets.id,
      },
    }).categories({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
