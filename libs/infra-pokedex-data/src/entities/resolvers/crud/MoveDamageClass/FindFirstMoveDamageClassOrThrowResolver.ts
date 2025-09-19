import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstMoveDamageClassOrThrowArgs } from "./args/FindFirstMoveDamageClassOrThrowArgs";
import { MoveDamageClass } from "../../../models/MoveDamageClass";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MoveDamageClass)
export class FindFirstMoveDamageClassOrThrowResolver {
  @TypeGraphQL.Query(_returns => MoveDamageClass, {
    nullable: true
  })
  async findFirstMoveDamageClassOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstMoveDamageClassOrThrowArgs): Promise<MoveDamageClass | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveDamageClasses.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
