import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneItemFlingEffectArgs } from "./args/DeleteOneItemFlingEffectArgs";
import { ItemFlingEffect } from "../../../models/ItemFlingEffect";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ItemFlingEffect)
export class DeleteOneItemFlingEffectResolver {
  @TypeGraphQL.Mutation(_returns => ItemFlingEffect, {
    nullable: true
  })
  async deleteOneItemFlingEffect(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneItemFlingEffectArgs): Promise<ItemFlingEffect | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).itemFlingEffects.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
