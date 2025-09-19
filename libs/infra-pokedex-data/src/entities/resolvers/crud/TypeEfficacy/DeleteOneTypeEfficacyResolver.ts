import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneTypeEfficacyArgs } from "./args/DeleteOneTypeEfficacyArgs";
import { TypeEfficacy } from "../../../models/TypeEfficacy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TypeEfficacy)
export class DeleteOneTypeEfficacyResolver {
  @TypeGraphQL.Mutation(_returns => TypeEfficacy, {
    nullable: true
  })
  async deleteOneTypeEfficacy(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneTypeEfficacyArgs): Promise<TypeEfficacy | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).typeEfficacy.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
