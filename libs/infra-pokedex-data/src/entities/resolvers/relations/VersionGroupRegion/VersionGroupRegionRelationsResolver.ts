import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Region } from "../../../models/Region";
import { VersionGroup } from "../../../models/VersionGroup";
import { VersionGroupRegion } from "../../../models/VersionGroupRegion";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => VersionGroupRegion)
export class VersionGroupRegionRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => VersionGroup, {
    nullable: false
  })
  async versionGroup(@TypeGraphQL.Root() versionGroupRegion: VersionGroupRegion, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<VersionGroup> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).versionGroupRegions.findUniqueOrThrow({
      where: {
        version_group_id: versionGroupRegion.version_group_id,
      },
    }).versionGroup({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Region, {
    nullable: false
  })
  async region(@TypeGraphQL.Root() versionGroupRegion: VersionGroupRegion, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Region> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).versionGroupRegions.findUniqueOrThrow({
      where: {
        version_group_id: versionGroupRegion.version_group_id,
      },
    }).region({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
