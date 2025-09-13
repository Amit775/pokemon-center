import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueMoveDamageClassesArgs } from "./args/FindUniqueMoveDamageClassesArgs";
import { MoveDamageClasses } from "../../../models/MoveDamageClasses";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MoveDamageClasses)
export class FindUniqueMoveDamageClassesResolver {
  @TypeGraphQL.Query(_returns => MoveDamageClasses, {
    nullable: true
  })
  async findUniqueMoveDamageClasses(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueMoveDamageClassesArgs): Promise<MoveDamageClasses | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveDamageClasses.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
