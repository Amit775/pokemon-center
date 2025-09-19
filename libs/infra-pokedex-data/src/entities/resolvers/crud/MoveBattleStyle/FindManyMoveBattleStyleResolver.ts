import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindManyMoveBattleStyleArgs } from "./args/FindManyMoveBattleStyleArgs";
import { MoveBattleStyle } from "../../../models/MoveBattleStyle";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MoveBattleStyle)
export class FindManyMoveBattleStyleResolver {
  @TypeGraphQL.Query(_returns => [MoveBattleStyle], {
    nullable: false
  })
  async moveBattleStyles(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyMoveBattleStyleArgs): Promise<MoveBattleStyle[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveBattleStyles.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
