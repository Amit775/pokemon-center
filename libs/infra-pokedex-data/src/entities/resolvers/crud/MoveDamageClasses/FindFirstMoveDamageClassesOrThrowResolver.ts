import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstMoveDamageClassesOrThrowArgs } from "./args/FindFirstMoveDamageClassesOrThrowArgs";
import { MoveDamageClasses } from "../../../models/MoveDamageClasses";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MoveDamageClasses)
export class FindFirstMoveDamageClassesOrThrowResolver {
  @TypeGraphQL.Query(_returns => MoveDamageClasses, {
    nullable: true
  })
  async findFirstMoveDamageClassesOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstMoveDamageClassesOrThrowArgs): Promise<MoveDamageClasses | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveDamageClasses.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
