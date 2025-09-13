import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstItemFlingEffectsOrThrowArgs } from "./args/FindFirstItemFlingEffectsOrThrowArgs";
import { ItemFlingEffects } from "../../../models/ItemFlingEffects";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ItemFlingEffects)
export class FindFirstItemFlingEffectsOrThrowResolver {
  @TypeGraphQL.Query(_returns => ItemFlingEffects, {
    nullable: true
  })
  async findFirstItemFlingEffectsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstItemFlingEffectsOrThrowArgs): Promise<ItemFlingEffects | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).itemFlingEffects.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
