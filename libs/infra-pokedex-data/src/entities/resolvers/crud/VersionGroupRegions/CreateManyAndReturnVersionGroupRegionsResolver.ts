import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnVersionGroupRegionsArgs } from "./args/CreateManyAndReturnVersionGroupRegionsArgs";
import { VersionGroupRegions } from "../../../models/VersionGroupRegions";
import { CreateManyAndReturnVersionGroupRegions } from "../../outputs/CreateManyAndReturnVersionGroupRegions";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => VersionGroupRegions)
export class CreateManyAndReturnVersionGroupRegionsResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnVersionGroupRegions], {
    nullable: false
  })
  async createManyAndReturnVersionGroupRegions(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnVersionGroupRegionsArgs): Promise<CreateManyAndReturnVersionGroupRegions[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).versionGroupRegions.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
