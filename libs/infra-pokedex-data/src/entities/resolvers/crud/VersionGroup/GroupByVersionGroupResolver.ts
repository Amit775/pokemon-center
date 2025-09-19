import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByVersionGroupArgs } from "./args/GroupByVersionGroupArgs";
import { VersionGroup } from "../../../models/VersionGroup";
import { VersionGroupGroupBy } from "../../outputs/VersionGroupGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => VersionGroup)
export class GroupByVersionGroupResolver {
  @TypeGraphQL.Query(_returns => [VersionGroupGroupBy], {
    nullable: false
  })
  async groupByVersionGroup(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByVersionGroupArgs): Promise<VersionGroupGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).versionGroups.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
