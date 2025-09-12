import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByMoveMetaAilmentsArgs } from "./args/GroupByMoveMetaAilmentsArgs";
import { MoveMetaAilments } from "../../../models/MoveMetaAilments";
import { MoveMetaAilmentsGroupBy } from "../../outputs/MoveMetaAilmentsGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MoveMetaAilments)
export class GroupByMoveMetaAilmentsResolver {
  @TypeGraphQL.Query(_returns => [MoveMetaAilmentsGroupBy], {
    nullable: false
  })
  async groupByMoveMetaAilments(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByMoveMetaAilmentsArgs): Promise<MoveMetaAilmentsGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveMetaAilments.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
