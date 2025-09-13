import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindManyMoveBattleStylesArgs } from "./args/FindManyMoveBattleStylesArgs";
import { MoveBattleStyles } from "../../../models/MoveBattleStyles";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MoveBattleStyles)
export class FindManyMoveBattleStylesResolver {
  @TypeGraphQL.Query(_returns => [MoveBattleStyles], {
    nullable: false
  })
  async findManyMoveBattleStyles(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyMoveBattleStylesArgs): Promise<MoveBattleStyles[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveBattleStyles.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
