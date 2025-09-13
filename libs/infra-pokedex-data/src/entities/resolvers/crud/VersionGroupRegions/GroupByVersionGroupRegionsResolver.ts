import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByVersionGroupRegionsArgs } from "./args/GroupByVersionGroupRegionsArgs";
import { VersionGroupRegions } from "../../../models/VersionGroupRegions";
import { VersionGroupRegionsGroupBy } from "../../outputs/VersionGroupRegionsGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => VersionGroupRegions)
export class GroupByVersionGroupRegionsResolver {
  @TypeGraphQL.Query(_returns => [VersionGroupRegionsGroupBy], {
    nullable: false
  })
  async groupByVersionGroupRegions(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByVersionGroupRegionsArgs): Promise<VersionGroupRegionsGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).versionGroupRegions.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
