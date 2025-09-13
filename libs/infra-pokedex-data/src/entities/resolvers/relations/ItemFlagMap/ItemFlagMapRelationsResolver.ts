import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { ItemFlagMap } from "../../../models/ItemFlagMap";
import { ItemFlags } from "../../../models/ItemFlags";
import { Items } from "../../../models/Items";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ItemFlagMap)
export class ItemFlagMapRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Items, {
    nullable: false
  })
  async item(@TypeGraphQL.Root() itemFlagMap: ItemFlagMap, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Items> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).itemFlagMap.findUniqueOrThrow({
      where: {
        item_id: itemFlagMap.item_id,
      },
    }).item({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => ItemFlags, {
    nullable: false
  })
  async flag(@TypeGraphQL.Root() itemFlagMap: ItemFlagMap, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<ItemFlags> {
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
