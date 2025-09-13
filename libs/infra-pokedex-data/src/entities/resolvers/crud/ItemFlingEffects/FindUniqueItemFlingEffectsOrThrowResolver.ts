import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueItemFlingEffectsOrThrowArgs } from "./args/FindUniqueItemFlingEffectsOrThrowArgs";
import { ItemFlingEffects } from "../../../models/ItemFlingEffects";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ItemFlingEffects)
export class FindUniqueItemFlingEffectsOrThrowResolver {
  @TypeGraphQL.Query(_returns => ItemFlingEffects, {
    nullable: true
  })
  async findUniqueItemFlingEffectsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueItemFlingEffectsOrThrowArgs): Promise<ItemFlingEffects | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).itemFlingEffects.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
