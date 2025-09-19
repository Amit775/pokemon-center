import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateOneVersionGroupRegionArgs } from "./args/CreateOneVersionGroupRegionArgs";
import { VersionGroupRegion } from "../../../models/VersionGroupRegion";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => VersionGroupRegion)
export class CreateOneVersionGroupRegionResolver {
  @TypeGraphQL.Mutation(_returns => VersionGroupRegion, {
    nullable: false
  })
  async createOneVersionGroupRegion(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneVersionGroupRegionArgs): Promise<VersionGroupRegion> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).versionGroupRegions.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
