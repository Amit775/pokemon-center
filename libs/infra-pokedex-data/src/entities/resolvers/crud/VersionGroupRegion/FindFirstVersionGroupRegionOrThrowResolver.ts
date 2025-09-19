import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstVersionGroupRegionOrThrowArgs } from "./args/FindFirstVersionGroupRegionOrThrowArgs";
import { VersionGroupRegion } from "../../../models/VersionGroupRegion";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => VersionGroupRegion)
export class FindFirstVersionGroupRegionOrThrowResolver {
  @TypeGraphQL.Query(_returns => VersionGroupRegion, {
    nullable: true
  })
  async findFirstVersionGroupRegionOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstVersionGroupRegionOrThrowArgs): Promise<VersionGroupRegion | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).versionGroupRegions.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
