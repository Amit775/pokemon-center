import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateMoveTargetsArgs } from "./args/AggregateMoveTargetsArgs";
import { MoveTargets } from "../../../models/MoveTargets";
import { AggregateMoveTargets } from "../../outputs/AggregateMoveTargets";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MoveTargets)
export class AggregateMoveTargetsResolver {
  @TypeGraphQL.Query(_returns => AggregateMoveTargets, {
    nullable: false
  })
  async aggregateMoveTargets(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateMoveTargetsArgs): Promise<AggregateMoveTargets> {
    return getPrismaFromContext(ctx).moveTargets.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
