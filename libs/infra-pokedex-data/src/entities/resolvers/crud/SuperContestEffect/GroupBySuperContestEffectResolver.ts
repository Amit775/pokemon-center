import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupBySuperContestEffectArgs } from "./args/GroupBySuperContestEffectArgs";
import { SuperContestEffect } from "../../../models/SuperContestEffect";
import { SuperContestEffectGroupBy } from "../../outputs/SuperContestEffectGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SuperContestEffect)
export class GroupBySuperContestEffectResolver {
  @TypeGraphQL.Query(_returns => [SuperContestEffectGroupBy], {
    nullable: false
  })
  async groupBySuperContestEffect(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupBySuperContestEffectArgs): Promise<SuperContestEffectGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).superContestEffects.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
