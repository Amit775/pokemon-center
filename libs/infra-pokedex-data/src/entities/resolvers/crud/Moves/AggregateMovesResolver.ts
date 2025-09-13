import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateMovesArgs } from "./args/AggregateMovesArgs";
import { Moves } from "../../../models/Moves";
import { AggregateMoves } from "../../outputs/AggregateMoves";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Moves)
export class AggregateMovesResolver {
  @TypeGraphQL.Query(_returns => AggregateMoves, {
    nullable: false
  })
  async aggregateMoves(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateMovesArgs): Promise<AggregateMoves> {
    return getPrismaFromContext(ctx).moves.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
