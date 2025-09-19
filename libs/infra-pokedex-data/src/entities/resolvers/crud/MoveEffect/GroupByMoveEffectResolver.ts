import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByMoveEffectArgs } from "./args/GroupByMoveEffectArgs";
import { MoveEffect } from "../../../models/MoveEffect";
import { MoveEffectGroupBy } from "../../outputs/MoveEffectGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MoveEffect)
export class GroupByMoveEffectResolver {
  @TypeGraphQL.Query(_returns => [MoveEffectGroupBy], {
    nullable: false
  })
  async groupByMoveEffect(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByMoveEffectArgs): Promise<MoveEffectGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveEffects.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
