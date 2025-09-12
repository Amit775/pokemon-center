import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnVersionsArgs } from "./args/CreateManyAndReturnVersionsArgs";
import { Versions } from "../../../models/Versions";
import { CreateManyAndReturnVersions } from "../../outputs/CreateManyAndReturnVersions";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Versions)
export class CreateManyAndReturnVersionsResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnVersions], {
    nullable: false
  })
  async createManyAndReturnVersions(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnVersionsArgs): Promise<CreateManyAndReturnVersions[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).versions.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
