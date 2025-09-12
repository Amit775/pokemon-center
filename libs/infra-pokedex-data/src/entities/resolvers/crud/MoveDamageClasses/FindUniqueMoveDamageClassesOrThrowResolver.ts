import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueMoveDamageClassesOrThrowArgs } from "./args/FindUniqueMoveDamageClassesOrThrowArgs";
import { MoveDamageClasses } from "../../../models/MoveDamageClasses";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MoveDamageClasses)
export class FindUniqueMoveDamageClassesOrThrowResolver {
  @TypeGraphQL.Query(_returns => MoveDamageClasses, {
    nullable: true
  })
  async findUniqueMoveDamageClassesOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueMoveDamageClassesOrThrowArgs): Promise<MoveDamageClasses | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveDamageClasses.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
