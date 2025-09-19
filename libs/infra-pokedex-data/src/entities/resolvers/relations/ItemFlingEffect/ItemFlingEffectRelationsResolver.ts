import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Item } from "../../../models/Item";
import { ItemFlingEffect } from "../../../models/ItemFlingEffect";
import { ItemFlingEffectItemsArgs } from "./args/ItemFlingEffectItemsArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ItemFlingEffect)
export class ItemFlingEffectRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Item], {
    nullable: false
  })
  async items(@TypeGraphQL.Root() itemFlingEffect: ItemFlingEffect, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: ItemFlingEffectItemsArgs): Promise<Item[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).itemFlingEffects.findUniqueOrThrow({
      where: {
        id: itemFlingEffect.id,
      },
    }).items({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
