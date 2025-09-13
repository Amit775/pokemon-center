import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueMoveBattleStylesOrThrowArgs } from "./args/FindUniqueMoveBattleStylesOrThrowArgs";
import { MoveBattleStyles } from "../../../models/MoveBattleStyles";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MoveBattleStyles)
export class FindUniqueMoveBattleStylesOrThrowResolver {
  @TypeGraphQL.Query(_returns => MoveBattleStyles, {
    nullable: true
  })
  async findUniqueMoveBattleStylesOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueMoveBattleStylesOrThrowArgs): Promise<MoveBattleStyles | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveBattleStyles.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
