import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateMoveFlagsArgs } from "./args/AggregateMoveFlagsArgs";
import { MoveFlags } from "../../../models/MoveFlags";
import { AggregateMoveFlags } from "../../outputs/AggregateMoveFlags";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MoveFlags)
export class AggregateMoveFlagsResolver {
  @TypeGraphQL.Query(_returns => AggregateMoveFlags, {
    nullable: false
  })
  async aggregateMoveFlags(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateMoveFlagsArgs): Promise<AggregateMoveFlags> {
    return getPrismaFromContext(ctx).moveFlags.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
