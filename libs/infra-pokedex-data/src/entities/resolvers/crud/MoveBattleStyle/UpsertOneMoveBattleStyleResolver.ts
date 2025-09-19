import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneMoveBattleStyleArgs } from "./args/UpsertOneMoveBattleStyleArgs";
import { MoveBattleStyle } from "../../../models/MoveBattleStyle";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MoveBattleStyle)
export class UpsertOneMoveBattleStyleResolver {
  @TypeGraphQL.Mutation(_returns => MoveBattleStyle, {
    nullable: false
  })
  async upsertOneMoveBattleStyle(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneMoveBattleStyleArgs): Promise<MoveBattleStyle> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveBattleStyles.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
