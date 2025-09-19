import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstMoveDamageClassArgs } from "./args/FindFirstMoveDamageClassArgs";
import { MoveDamageClass } from "../../../models/MoveDamageClass";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MoveDamageClass)
export class FindFirstMoveDamageClassResolver {
  @TypeGraphQL.Query(_returns => MoveDamageClass, {
    nullable: true
  })
  async findFirstMoveDamageClass(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstMoveDamageClassArgs): Promise<MoveDamageClass | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveDamageClasses.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
