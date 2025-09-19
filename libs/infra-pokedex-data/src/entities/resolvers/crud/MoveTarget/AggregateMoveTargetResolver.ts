import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateMoveTargetArgs } from "./args/AggregateMoveTargetArgs";
import { MoveTarget } from "../../../models/MoveTarget";
import { AggregateMoveTarget } from "../../outputs/AggregateMoveTarget";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MoveTarget)
export class AggregateMoveTargetResolver {
  @TypeGraphQL.Query(_returns => AggregateMoveTarget, {
    nullable: false
  })
  async aggregateMoveTarget(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateMoveTargetArgs): Promise<AggregateMoveTarget> {
    return getPrismaFromContext(ctx).moveTargets.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
