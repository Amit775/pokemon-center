import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneVersionGroupRegionArgs } from "./args/UpdateOneVersionGroupRegionArgs";
import { VersionGroupRegion } from "../../../models/VersionGroupRegion";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => VersionGroupRegion)
export class UpdateOneVersionGroupRegionResolver {
  @TypeGraphQL.Mutation(_returns => VersionGroupRegion, {
    nullable: true
  })
  async updateOneVersionGroupRegion(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneVersionGroupRegionArgs): Promise<VersionGroupRegion | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).versionGroupRegions.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
