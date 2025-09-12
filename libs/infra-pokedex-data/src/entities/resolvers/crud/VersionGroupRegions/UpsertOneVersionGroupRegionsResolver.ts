import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneVersionGroupRegionsArgs } from "./args/UpsertOneVersionGroupRegionsArgs";
import { VersionGroupRegions } from "../../../models/VersionGroupRegions";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => VersionGroupRegions)
export class UpsertOneVersionGroupRegionsResolver {
  @TypeGraphQL.Mutation(_returns => VersionGroupRegions, {
    nullable: false
  })
  async upsertOneVersionGroupRegions(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneVersionGroupRegionsArgs): Promise<VersionGroupRegions> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).versionGroupRegions.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
