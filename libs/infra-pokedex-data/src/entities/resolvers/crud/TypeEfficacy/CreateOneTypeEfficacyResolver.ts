import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateOneTypeEfficacyArgs } from "./args/CreateOneTypeEfficacyArgs";
import { TypeEfficacy } from "../../../models/TypeEfficacy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TypeEfficacy)
export class CreateOneTypeEfficacyResolver {
  @TypeGraphQL.Mutation(_returns => TypeEfficacy, {
    nullable: false
  })
  async createOneTypeEfficacy(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneTypeEfficacyArgs): Promise<TypeEfficacy> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).typeEfficacy.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
