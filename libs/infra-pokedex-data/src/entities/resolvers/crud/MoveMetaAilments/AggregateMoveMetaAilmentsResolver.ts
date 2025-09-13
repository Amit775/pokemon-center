import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateMoveMetaAilmentsArgs } from "./args/AggregateMoveMetaAilmentsArgs";
import { MoveMetaAilments } from "../../../models/MoveMetaAilments";
import { AggregateMoveMetaAilments } from "../../outputs/AggregateMoveMetaAilments";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MoveMetaAilments)
export class AggregateMoveMetaAilmentsResolver {
  @TypeGraphQL.Query(_returns => AggregateMoveMetaAilments, {
    nullable: false
  })
  async aggregateMoveMetaAilments(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateMoveMetaAilmentsArgs): Promise<AggregateMoveMetaAilments> {
    return getPrismaFromContext(ctx).moveMetaAilments.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
