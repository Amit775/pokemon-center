import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByMoveFlagsArgs } from "./args/GroupByMoveFlagsArgs";
import { MoveFlags } from "../../../models/MoveFlags";
import { MoveFlagsGroupBy } from "../../outputs/MoveFlagsGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MoveFlags)
export class GroupByMoveFlagsResolver {
  @TypeGraphQL.Query(_returns => [MoveFlagsGroupBy], {
    nullable: false
  })
  async groupByMoveFlags(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByMoveFlagsArgs): Promise<MoveFlagsGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveFlags.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
