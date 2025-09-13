import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByEggGroupsArgs } from "./args/GroupByEggGroupsArgs";
import { EggGroups } from "../../../models/EggGroups";
import { EggGroupsGroupBy } from "../../outputs/EggGroupsGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => EggGroups)
export class GroupByEggGroupsResolver {
  @TypeGraphQL.Query(_returns => [EggGroupsGroupBy], {
    nullable: false
  })
  async groupByEggGroups(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByEggGroupsArgs): Promise<EggGroupsGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).eggGroups.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
