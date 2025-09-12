import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { ItemFlingEffects } from "../../../models/ItemFlingEffects";
import { Items } from "../../../models/Items";
import { ItemFlingEffectsItemsArgs } from "./args/ItemFlingEffectsItemsArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ItemFlingEffects)
export class ItemFlingEffectsRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Items], {
    nullable: false
  })
  async items(@TypeGraphQL.Root() itemFlingEffects: ItemFlingEffects, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: ItemFlingEffectsItemsArgs): Promise<Items[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).itemFlingEffects.findUniqueOrThrow({
      where: {
        id: itemFlingEffects.id,
      },
    }).items({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
