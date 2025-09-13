import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByItemGameIndicesArgs } from "./args/GroupByItemGameIndicesArgs";
import { ItemGameIndices } from "../../../models/ItemGameIndices";
import { ItemGameIndicesGroupBy } from "../../outputs/ItemGameIndicesGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ItemGameIndices)
export class GroupByItemGameIndicesResolver {
  @TypeGraphQL.Query(_returns => [ItemGameIndicesGroupBy], {
    nullable: false
  })
  async groupByItemGameIndices(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByItemGameIndicesArgs): Promise<ItemGameIndicesGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).itemGameIndices.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
