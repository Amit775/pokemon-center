import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Item } from "../../../models/Item";
import { ItemFlag } from "../../../models/ItemFlag";
import { ItemFlagMap } from "../../../models/ItemFlagMap";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ItemFlagMap)
export class ItemFlagMapRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Item, {
    nullable: false
  })
  async item(@TypeGraphQL.Root() itemFlagMap: ItemFlagMap, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Item> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).itemFlagMap.findUniqueOrThrow({
      where: {
        item_id: itemFlagMap.item_id,
      },
    }).item({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => ItemFlag, {
    nullable: false
  })
  async flag(@TypeGraphQL.Root() itemFlagMap: ItemFlagMap, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<ItemFlag> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).itemFlagMap.findUniqueOrThrow({
      where: {
        item_id: itemFlagMap.item_id,
      },
    }).flag({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
