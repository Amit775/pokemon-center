import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByItemGameIndexArgs } from "./args/GroupByItemGameIndexArgs";
import { ItemGameIndex } from "../../../models/ItemGameIndex";
import { ItemGameIndexGroupBy } from "../../outputs/ItemGameIndexGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ItemGameIndex)
export class GroupByItemGameIndexResolver {
  @TypeGraphQL.Query(_returns => [ItemGameIndexGroupBy], {
    nullable: false
  })
  async groupByItemGameIndex(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByItemGameIndexArgs): Promise<ItemGameIndexGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).itemGameIndices.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
