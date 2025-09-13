import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindManyMoveDamageClassesArgs } from "./args/FindManyMoveDamageClassesArgs";
import { MoveDamageClasses } from "../../../models/MoveDamageClasses";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MoveDamageClasses)
export class FindManyMoveDamageClassesResolver {
  @TypeGraphQL.Query(_returns => [MoveDamageClasses], {
    nullable: false
  })
  async findManyMoveDamageClasses(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyMoveDamageClassesArgs): Promise<MoveDamageClasses[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveDamageClasses.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
