import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueMoveDamageClassArgs } from "./args/FindUniqueMoveDamageClassArgs";
import { MoveDamageClass } from "../../../models/MoveDamageClass";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MoveDamageClass)
export class FindUniqueMoveDamageClassResolver {
  @TypeGraphQL.Query(_returns => MoveDamageClass, {
    nullable: true
  })
  async moveDamageClass(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueMoveDamageClassArgs): Promise<MoveDamageClass | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveDamageClasses.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
