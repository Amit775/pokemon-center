import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstItemFlingEffectsArgs } from "./args/FindFirstItemFlingEffectsArgs";
import { ItemFlingEffects } from "../../../models/ItemFlingEffects";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ItemFlingEffects)
export class FindFirstItemFlingEffectsResolver {
  @TypeGraphQL.Query(_returns => ItemFlingEffects, {
    nullable: true
  })
  async findFirstItemFlingEffects(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstItemFlingEffectsArgs): Promise<ItemFlingEffects | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).itemFlingEffects.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
