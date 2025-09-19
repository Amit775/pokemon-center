import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnNatureArgs } from "./args/CreateManyAndReturnNatureArgs";
import { Nature } from "../../../models/Nature";
import { CreateManyAndReturnNature } from "../../outputs/CreateManyAndReturnNature";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Nature)
export class CreateManyAndReturnNatureResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnNature], {
    nullable: false
  })
  async createManyAndReturnNature(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnNatureArgs): Promise<CreateManyAndReturnNature[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).natures.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
