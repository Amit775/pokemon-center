import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneMoveDamageClassesArgs } from "./args/UpdateOneMoveDamageClassesArgs";
import { MoveDamageClasses } from "../../../models/MoveDamageClasses";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MoveDamageClasses)
export class UpdateOneMoveDamageClassesResolver {
  @TypeGraphQL.Mutation(_returns => MoveDamageClasses, {
    nullable: true
  })
  async updateOneMoveDamageClasses(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneMoveDamageClassesArgs): Promise<MoveDamageClasses | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveDamageClasses.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
