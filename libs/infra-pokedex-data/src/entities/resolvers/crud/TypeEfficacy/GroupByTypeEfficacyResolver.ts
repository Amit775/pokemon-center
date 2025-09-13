import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByTypeEfficacyArgs } from "./args/GroupByTypeEfficacyArgs";
import { TypeEfficacy } from "../../../models/TypeEfficacy";
import { TypeEfficacyGroupBy } from "../../outputs/TypeEfficacyGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TypeEfficacy)
export class GroupByTypeEfficacyResolver {
  @TypeGraphQL.Query(_returns => [TypeEfficacyGroupBy], {
    nullable: false
  })
  async groupByTypeEfficacy(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByTypeEfficacyArgs): Promise<TypeEfficacyGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).typeEfficacy.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
