import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateMoveBattleStylesArgs } from "./args/AggregateMoveBattleStylesArgs";
import { MoveBattleStyles } from "../../../models/MoveBattleStyles";
import { AggregateMoveBattleStyles } from "../../outputs/AggregateMoveBattleStyles";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MoveBattleStyles)
export class AggregateMoveBattleStylesResolver {
  @TypeGraphQL.Query(_returns => AggregateMoveBattleStyles, {
    nullable: false
  })
  async aggregateMoveBattleStyles(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateMoveBattleStylesArgs): Promise<AggregateMoveBattleStyles> {
    return getPrismaFromContext(ctx).moveBattleStyles.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
