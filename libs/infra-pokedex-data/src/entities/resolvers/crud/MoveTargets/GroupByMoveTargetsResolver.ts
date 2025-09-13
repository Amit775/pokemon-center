import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByMoveTargetsArgs } from "./args/GroupByMoveTargetsArgs";
import { MoveTargets } from "../../../models/MoveTargets";
import { MoveTargetsGroupBy } from "../../outputs/MoveTargetsGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MoveTargets)
export class GroupByMoveTargetsResolver {
  @TypeGraphQL.Query(_returns => [MoveTargetsGroupBy], {
    nullable: false
  })
  async groupByMoveTargets(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByMoveTargetsArgs): Promise<MoveTargetsGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveTargets.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
