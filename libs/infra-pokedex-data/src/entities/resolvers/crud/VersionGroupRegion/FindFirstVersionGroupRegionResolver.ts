import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstVersionGroupRegionArgs } from "./args/FindFirstVersionGroupRegionArgs";
import { VersionGroupRegion } from "../../../models/VersionGroupRegion";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => VersionGroupRegion)
export class FindFirstVersionGroupRegionResolver {
  @TypeGraphQL.Query(_returns => VersionGroupRegion, {
    nullable: true
  })
  async findFirstVersionGroupRegion(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstVersionGroupRegionArgs): Promise<VersionGroupRegion | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).versionGroupRegions.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
