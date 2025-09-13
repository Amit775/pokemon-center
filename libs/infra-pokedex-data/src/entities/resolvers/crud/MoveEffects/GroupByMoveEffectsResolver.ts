import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByMoveEffectsArgs } from "./args/GroupByMoveEffectsArgs";
import { MoveEffects } from "../../../models/MoveEffects";
import { MoveEffectsGroupBy } from "../../outputs/MoveEffectsGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MoveEffects)
export class GroupByMoveEffectsResolver {
  @TypeGraphQL.Query(_returns => [MoveEffectsGroupBy], {
    nullable: false
  })
  async groupByMoveEffects(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByMoveEffectsArgs): Promise<MoveEffectsGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveEffects.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
