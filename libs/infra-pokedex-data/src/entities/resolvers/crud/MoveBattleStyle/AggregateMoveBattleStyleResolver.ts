import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateMoveBattleStyleArgs } from "./args/AggregateMoveBattleStyleArgs";
import { MoveBattleStyle } from "../../../models/MoveBattleStyle";
import { AggregateMoveBattleStyle } from "../../outputs/AggregateMoveBattleStyle";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MoveBattleStyle)
export class AggregateMoveBattleStyleResolver {
  @TypeGraphQL.Query(_returns => AggregateMoveBattleStyle, {
    nullable: false
  })
  async aggregateMoveBattleStyle(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateMoveBattleStyleArgs): Promise<AggregateMoveBattleStyle> {
    return getPrismaFromContext(ctx).moveBattleStyles.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
