import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueVersionGroupRegionsOrThrowArgs } from "./args/FindUniqueVersionGroupRegionsOrThrowArgs";
import { VersionGroupRegions } from "../../../models/VersionGroupRegions";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => VersionGroupRegions)
export class FindUniqueVersionGroupRegionsOrThrowResolver {
  @TypeGraphQL.Query(_returns => VersionGroupRegions, {
    nullable: true
  })
  async findUniqueVersionGroupRegionsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueVersionGroupRegionsOrThrowArgs): Promise<VersionGroupRegions | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).versionGroupRegions.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
