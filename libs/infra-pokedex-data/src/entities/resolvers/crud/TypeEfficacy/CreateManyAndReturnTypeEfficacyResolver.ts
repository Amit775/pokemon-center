import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnTypeEfficacyArgs } from "./args/CreateManyAndReturnTypeEfficacyArgs";
import { TypeEfficacy } from "../../../models/TypeEfficacy";
import { CreateManyAndReturnTypeEfficacy } from "../../outputs/CreateManyAndReturnTypeEfficacy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TypeEfficacy)
export class CreateManyAndReturnTypeEfficacyResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnTypeEfficacy], {
    nullable: false
  })
  async createManyAndReturnTypeEfficacy(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnTypeEfficacyArgs): Promise<CreateManyAndReturnTypeEfficacy[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).typeEfficacy.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
