import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateMoveMetaArgs } from "./args/AggregateMoveMetaArgs";
import { MoveMeta } from "../../../models/MoveMeta";
import { AggregateMoveMeta } from "../../outputs/AggregateMoveMeta";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MoveMeta)
export class AggregateMoveMetaResolver {
  @TypeGraphQL.Query(_returns => AggregateMoveMeta, {
    nullable: false
  })
  async aggregateMoveMeta(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateMoveMetaArgs): Promise<AggregateMoveMeta> {
    return getPrismaFromContext(ctx).moveMeta.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
