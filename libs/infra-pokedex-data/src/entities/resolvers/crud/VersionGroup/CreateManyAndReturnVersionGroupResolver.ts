import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnVersionGroupArgs } from "./args/CreateManyAndReturnVersionGroupArgs";
import { VersionGroup } from "../../../models/VersionGroup";
import { CreateManyAndReturnVersionGroup } from "../../outputs/CreateManyAndReturnVersionGroup";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => VersionGroup)
export class CreateManyAndReturnVersionGroupResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnVersionGroup], {
    nullable: false
  })
  async createManyAndReturnVersionGroup(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnVersionGroupArgs): Promise<CreateManyAndReturnVersionGroup[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).versionGroups.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
