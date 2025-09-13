import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateSuperContestEffectsArgs } from "./args/AggregateSuperContestEffectsArgs";
import { SuperContestEffects } from "../../../models/SuperContestEffects";
import { AggregateSuperContestEffects } from "../../outputs/AggregateSuperContestEffects";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SuperContestEffects)
export class AggregateSuperContestEffectsResolver {
  @TypeGraphQL.Query(_returns => AggregateSuperContestEffects, {
    nullable: false
  })
  async aggregateSuperContestEffects(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateSuperContestEffectsArgs): Promise<AggregateSuperContestEffects> {
    return getPrismaFromContext(ctx).superContestEffects.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
