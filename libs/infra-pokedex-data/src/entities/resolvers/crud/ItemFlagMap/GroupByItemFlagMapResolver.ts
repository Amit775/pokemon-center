import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByItemFlagMapArgs } from "./args/GroupByItemFlagMapArgs";
import { ItemFlagMap } from "../../../models/ItemFlagMap";
import { ItemFlagMapGroupBy } from "../../outputs/ItemFlagMapGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ItemFlagMap)
export class GroupByItemFlagMapResolver {
  @TypeGraphQL.Query(_returns => [ItemFlagMapGroupBy], {
    nullable: false
  })
  async groupByItemFlagMap(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByItemFlagMapArgs): Promise<ItemFlagMapGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).itemFlagMap.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
