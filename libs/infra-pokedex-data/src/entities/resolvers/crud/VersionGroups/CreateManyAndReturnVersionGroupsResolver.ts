import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnVersionGroupsArgs } from "./args/CreateManyAndReturnVersionGroupsArgs";
import { VersionGroups } from "../../../models/VersionGroups";
import { CreateManyAndReturnVersionGroups } from "../../outputs/CreateManyAndReturnVersionGroups";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => VersionGroups)
export class CreateManyAndReturnVersionGroupsResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnVersionGroups], {
    nullable: false
  })
  async createManyAndReturnVersionGroups(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnVersionGroupsArgs): Promise<CreateManyAndReturnVersionGroups[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).versionGroups.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
