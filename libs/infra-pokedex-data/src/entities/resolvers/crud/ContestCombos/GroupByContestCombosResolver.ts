import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByContestCombosArgs } from "./args/GroupByContestCombosArgs";
import { ContestCombos } from "../../../models/ContestCombos";
import { ContestCombosGroupBy } from "../../outputs/ContestCombosGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ContestCombos)
export class GroupByContestCombosResolver {
  @TypeGraphQL.Query(_returns => [ContestCombosGroupBy], {
    nullable: false
  })
  async groupByContestCombos(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByContestCombosArgs): Promise<ContestCombosGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).contestCombos.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
