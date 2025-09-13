import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueMoveBattleStylesArgs } from "./args/FindUniqueMoveBattleStylesArgs";
import { MoveBattleStyles } from "../../../models/MoveBattleStyles";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MoveBattleStyles)
export class FindUniqueMoveBattleStylesResolver {
  @TypeGraphQL.Query(_returns => MoveBattleStyles, {
    nullable: true
  })
  async findUniqueMoveBattleStyles(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueMoveBattleStylesArgs): Promise<MoveBattleStyles | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveBattleStyles.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
