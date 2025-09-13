import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupBySuperContestEffectsArgs } from "./args/GroupBySuperContestEffectsArgs";
import { SuperContestEffects } from "../../../models/SuperContestEffects";
import { SuperContestEffectsGroupBy } from "../../outputs/SuperContestEffectsGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SuperContestEffects)
export class GroupBySuperContestEffectsResolver {
  @TypeGraphQL.Query(_returns => [SuperContestEffectsGroupBy], {
    nullable: false
  })
  async groupBySuperContestEffects(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupBySuperContestEffectsArgs): Promise<SuperContestEffectsGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).superContestEffects.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
