import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstMoveBattleStyleArgs } from "./args/FindFirstMoveBattleStyleArgs";
import { MoveBattleStyle } from "../../../models/MoveBattleStyle";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MoveBattleStyle)
export class FindFirstMoveBattleStyleResolver {
  @TypeGraphQL.Query(_returns => MoveBattleStyle, {
    nullable: true
  })
  async findFirstMoveBattleStyle(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstMoveBattleStyleArgs): Promise<MoveBattleStyle | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveBattleStyles.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
