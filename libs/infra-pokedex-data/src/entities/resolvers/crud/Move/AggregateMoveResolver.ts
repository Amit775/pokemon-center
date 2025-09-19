import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateMoveArgs } from "./args/AggregateMoveArgs";
import { Move } from "../../../models/Move";
import { AggregateMove } from "../../outputs/AggregateMove";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Move)
export class AggregateMoveResolver {
  @TypeGraphQL.Query(_returns => AggregateMove, {
    nullable: false
  })
  async aggregateMove(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateMoveArgs): Promise<AggregateMove> {
    return getPrismaFromContext(ctx).moves.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
