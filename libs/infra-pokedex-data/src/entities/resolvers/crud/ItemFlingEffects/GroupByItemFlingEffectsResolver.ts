import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByItemFlingEffectsArgs } from "./args/GroupByItemFlingEffectsArgs";
import { ItemFlingEffects } from "../../../models/ItemFlingEffects";
import { ItemFlingEffectsGroupBy } from "../../outputs/ItemFlingEffectsGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ItemFlingEffects)
export class GroupByItemFlingEffectsResolver {
  @TypeGraphQL.Query(_returns => [ItemFlingEffectsGroupBy], {
    nullable: false
  })
  async groupByItemFlingEffects(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByItemFlingEffectsArgs): Promise<ItemFlingEffectsGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).itemFlingEffects.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
