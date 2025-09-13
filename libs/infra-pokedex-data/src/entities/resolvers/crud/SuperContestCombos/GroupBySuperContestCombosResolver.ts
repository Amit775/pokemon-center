import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupBySuperContestCombosArgs } from "./args/GroupBySuperContestCombosArgs";
import { SuperContestCombos } from "../../../models/SuperContestCombos";
import { SuperContestCombosGroupBy } from "../../outputs/SuperContestCombosGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SuperContestCombos)
export class GroupBySuperContestCombosResolver {
  @TypeGraphQL.Query(_returns => [SuperContestCombosGroupBy], {
    nullable: false
  })
  async groupBySuperContestCombos(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupBySuperContestCombosArgs): Promise<SuperContestCombosGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).superContestCombos.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
