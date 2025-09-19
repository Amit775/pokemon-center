import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByMoveMetaCategoryArgs } from "./args/GroupByMoveMetaCategoryArgs";
import { MoveMetaCategory } from "../../../models/MoveMetaCategory";
import { MoveMetaCategoryGroupBy } from "../../outputs/MoveMetaCategoryGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MoveMetaCategory)
export class GroupByMoveMetaCategoryResolver {
  @TypeGraphQL.Query(_returns => [MoveMetaCategoryGroupBy], {
    nullable: false
  })
  async groupByMoveMetaCategory(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByMoveMetaCategoryArgs): Promise<MoveMetaCategoryGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveMetaCategories.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
