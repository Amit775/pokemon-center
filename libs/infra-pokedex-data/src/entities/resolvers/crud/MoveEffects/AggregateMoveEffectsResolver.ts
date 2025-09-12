import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateMoveEffectsArgs } from "./args/AggregateMoveEffectsArgs";
import { MoveEffects } from "../../../models/MoveEffects";
import { AggregateMoveEffects } from "../../outputs/AggregateMoveEffects";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MoveEffects)
export class AggregateMoveEffectsResolver {
  @TypeGraphQL.Query(_returns => AggregateMoveEffects, {
    nullable: false
  })
  async aggregateMoveEffects(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateMoveEffectsArgs): Promise<AggregateMoveEffects> {
    return getPrismaFromContext(ctx).moveEffects.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
