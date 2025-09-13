import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindManyVersionGroupRegionsArgs } from "./args/FindManyVersionGroupRegionsArgs";
import { VersionGroupRegions } from "../../../models/VersionGroupRegions";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => VersionGroupRegions)
export class FindManyVersionGroupRegionsResolver {
  @TypeGraphQL.Query(_returns => [VersionGroupRegions], {
    nullable: false
  })
  async findManyVersionGroupRegions(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyVersionGroupRegionsArgs): Promise<VersionGroupRegions[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).versionGroupRegions.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
