import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByMoveBattleStylesArgs } from "./args/GroupByMoveBattleStylesArgs";
import { MoveBattleStyles } from "../../../models/MoveBattleStyles";
import { MoveBattleStylesGroupBy } from "../../outputs/MoveBattleStylesGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MoveBattleStyles)
export class GroupByMoveBattleStylesResolver {
  @TypeGraphQL.Query(_returns => [MoveBattleStylesGroupBy], {
    nullable: false
  })
  async groupByMoveBattleStyles(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByMoveBattleStylesArgs): Promise<MoveBattleStylesGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveBattleStyles.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
