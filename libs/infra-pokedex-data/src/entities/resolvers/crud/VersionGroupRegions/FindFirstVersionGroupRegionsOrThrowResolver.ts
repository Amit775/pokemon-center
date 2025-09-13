import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstVersionGroupRegionsOrThrowArgs } from "./args/FindFirstVersionGroupRegionsOrThrowArgs";
import { VersionGroupRegions } from "../../../models/VersionGroupRegions";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => VersionGroupRegions)
export class FindFirstVersionGroupRegionsOrThrowResolver {
  @TypeGraphQL.Query(_returns => VersionGroupRegions, {
    nullable: true
  })
  async findFirstVersionGroupRegionsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstVersionGroupRegionsOrThrowArgs): Promise<VersionGroupRegions | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).versionGroupRegions.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
