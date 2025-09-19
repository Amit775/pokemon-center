import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueItemFlingEffectArgs } from "./args/FindUniqueItemFlingEffectArgs";
import { ItemFlingEffect } from "../../../models/ItemFlingEffect";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ItemFlingEffect)
export class FindUniqueItemFlingEffectResolver {
  @TypeGraphQL.Query(_returns => ItemFlingEffect, {
    nullable: true
  })
  async itemFlingEffect(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueItemFlingEffectArgs): Promise<ItemFlingEffect | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).itemFlingEffects.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
