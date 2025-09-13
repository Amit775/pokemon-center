import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByItemFlagsArgs } from "./args/GroupByItemFlagsArgs";
import { ItemFlags } from "../../../models/ItemFlags";
import { ItemFlagsGroupBy } from "../../outputs/ItemFlagsGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ItemFlags)
export class GroupByItemFlagsResolver {
  @TypeGraphQL.Query(_returns => [ItemFlagsGroupBy], {
    nullable: false
  })
  async groupByItemFlags(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByItemFlagsArgs): Promise<ItemFlagsGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).itemFlags.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
