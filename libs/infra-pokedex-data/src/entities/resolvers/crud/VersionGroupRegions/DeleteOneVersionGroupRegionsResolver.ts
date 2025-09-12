import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneVersionGroupRegionsArgs } from "./args/DeleteOneVersionGroupRegionsArgs";
import { VersionGroupRegions } from "../../../models/VersionGroupRegions";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => VersionGroupRegions)
export class DeleteOneVersionGroupRegionsResolver {
  @TypeGraphQL.Mutation(_returns => VersionGroupRegions, {
    nullable: true
  })
  async deleteOneVersionGroupRegions(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneVersionGroupRegionsArgs): Promise<VersionGroupRegions | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).versionGroupRegions.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
