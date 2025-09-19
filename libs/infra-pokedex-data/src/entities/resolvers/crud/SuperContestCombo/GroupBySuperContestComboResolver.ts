import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupBySuperContestComboArgs } from "./args/GroupBySuperContestComboArgs";
import { SuperContestCombo } from "../../../models/SuperContestCombo";
import { SuperContestComboGroupBy } from "../../outputs/SuperContestComboGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SuperContestCombo)
export class GroupBySuperContestComboResolver {
  @TypeGraphQL.Query(_returns => [SuperContestComboGroupBy], {
    nullable: false
  })
  async groupBySuperContestCombo(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupBySuperContestComboArgs): Promise<SuperContestComboGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).superContestCombos.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
