import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstMoveBattleStyleOrThrowArgs } from "./args/FindFirstMoveBattleStyleOrThrowArgs";
import { MoveBattleStyle } from "../../../models/MoveBattleStyle";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MoveBattleStyle)
export class FindFirstMoveBattleStyleOrThrowResolver {
  @TypeGraphQL.Query(_returns => MoveBattleStyle, {
    nullable: true
  })
  async findFirstMoveBattleStyleOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstMoveBattleStyleOrThrowArgs): Promise<MoveBattleStyle | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveBattleStyles.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
