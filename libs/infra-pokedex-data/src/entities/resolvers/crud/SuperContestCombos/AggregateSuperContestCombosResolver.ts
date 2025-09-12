import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateSuperContestCombosArgs } from "./args/AggregateSuperContestCombosArgs";
import { SuperContestCombos } from "../../../models/SuperContestCombos";
import { AggregateSuperContestCombos } from "../../outputs/AggregateSuperContestCombos";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SuperContestCombos)
export class AggregateSuperContestCombosResolver {
  @TypeGraphQL.Query(_returns => AggregateSuperContestCombos, {
    nullable: false
  })
  async aggregateSuperContestCombos(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateSuperContestCombosArgs): Promise<AggregateSuperContestCombos> {
    return getPrismaFromContext(ctx).superContestCombos.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
