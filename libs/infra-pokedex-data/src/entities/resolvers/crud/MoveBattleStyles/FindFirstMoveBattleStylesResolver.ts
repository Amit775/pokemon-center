import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstMoveBattleStylesArgs } from "./args/FindFirstMoveBattleStylesArgs";
import { MoveBattleStyles } from "../../../models/MoveBattleStyles";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MoveBattleStyles)
export class FindFirstMoveBattleStylesResolver {
  @TypeGraphQL.Query(_returns => MoveBattleStyles, {
    nullable: true
  })
  async findFirstMoveBattleStyles(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstMoveBattleStylesArgs): Promise<MoveBattleStyles | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveBattleStyles.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
