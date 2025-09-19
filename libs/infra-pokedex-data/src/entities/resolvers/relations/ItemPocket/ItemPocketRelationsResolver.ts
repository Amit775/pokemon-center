import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { ItemCategory } from "../../../models/ItemCategory";
import { ItemPocket } from "../../../models/ItemPocket";
import { ItemPocketCategoriesArgs } from "./args/ItemPocketCategoriesArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ItemPocket)
export class ItemPocketRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [ItemCategory], {
    nullable: false
  })
  async categories(@TypeGraphQL.Root() itemPocket: ItemPocket, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: ItemPocketCategoriesArgs): Promise<ItemCategory[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).itemPockets.findUniqueOrThrow({
      where: {
        id: itemPocket.id,
      },
    }).categories({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
