import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByMoveFlagMapArgs } from "./args/GroupByMoveFlagMapArgs";
import { MoveFlagMap } from "../../../models/MoveFlagMap";
import { MoveFlagMapGroupBy } from "../../outputs/MoveFlagMapGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MoveFlagMap)
export class GroupByMoveFlagMapResolver {
  @TypeGraphQL.Query(_returns => [MoveFlagMapGroupBy], {
    nullable: false
  })
  async groupByMoveFlagMap(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByMoveFlagMapArgs): Promise<MoveFlagMapGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveFlagMap.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
