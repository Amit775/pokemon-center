import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueVersionGroupRegionOrThrowArgs } from "./args/FindUniqueVersionGroupRegionOrThrowArgs";
import { VersionGroupRegion } from "../../../models/VersionGroupRegion";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => VersionGroupRegion)
export class FindUniqueVersionGroupRegionOrThrowResolver {
  @TypeGraphQL.Query(_returns => VersionGroupRegion, {
    nullable: true
  })
  async getVersionGroupRegion(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueVersionGroupRegionOrThrowArgs): Promise<VersionGroupRegion | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).versionGroupRegions.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
