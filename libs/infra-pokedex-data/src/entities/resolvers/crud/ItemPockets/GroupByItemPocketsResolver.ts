import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByItemPocketsArgs } from "./args/GroupByItemPocketsArgs";
import { ItemPockets } from "../../../models/ItemPockets";
import { ItemPocketsGroupBy } from "../../outputs/ItemPocketsGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ItemPockets)
export class GroupByItemPocketsResolver {
  @TypeGraphQL.Query(_returns => [ItemPocketsGroupBy], {
    nullable: false
  })
  async groupByItemPockets(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByItemPocketsArgs): Promise<ItemPocketsGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).itemPockets.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
