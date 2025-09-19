import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateMoveMetaStatChangesArgs } from "./args/AggregateMoveMetaStatChangesArgs";
import { MoveMetaStatChanges } from "../../../models/MoveMetaStatChanges";
import { AggregateMoveMetaStatChanges } from "../../outputs/AggregateMoveMetaStatChanges";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MoveMetaStatChanges)
export class AggregateMoveMetaStatChangesResolver {
  @TypeGraphQL.Query(_returns => AggregateMoveMetaStatChanges, {
    nullable: false
  })
  async aggregateMoveMetaStatChanges(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateMoveMetaStatChangesArgs): Promise<AggregateMoveMetaStatChanges> {
    return getPrismaFromContext(ctx).moveMetaStatChanges.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
