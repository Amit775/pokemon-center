import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByMoveDamageClassArgs } from "./args/GroupByMoveDamageClassArgs";
import { MoveDamageClass } from "../../../models/MoveDamageClass";
import { MoveDamageClassGroupBy } from "../../outputs/MoveDamageClassGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MoveDamageClass)
export class GroupByMoveDamageClassResolver {
  @TypeGraphQL.Query(_returns => [MoveDamageClassGroupBy], {
    nullable: false
  })
  async groupByMoveDamageClass(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByMoveDamageClassArgs): Promise<MoveDamageClassGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveDamageClasses.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
