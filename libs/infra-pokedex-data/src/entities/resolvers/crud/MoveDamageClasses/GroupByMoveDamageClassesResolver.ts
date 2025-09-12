import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByMoveDamageClassesArgs } from "./args/GroupByMoveDamageClassesArgs";
import { MoveDamageClasses } from "../../../models/MoveDamageClasses";
import { MoveDamageClassesGroupBy } from "../../outputs/MoveDamageClassesGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MoveDamageClasses)
export class GroupByMoveDamageClassesResolver {
  @TypeGraphQL.Query(_returns => [MoveDamageClassesGroupBy], {
    nullable: false
  })
  async groupByMoveDamageClasses(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByMoveDamageClassesArgs): Promise<MoveDamageClassesGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveDamageClasses.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
