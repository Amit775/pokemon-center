import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateSuperContestComboArgs } from "./args/AggregateSuperContestComboArgs";
import { SuperContestCombo } from "../../../models/SuperContestCombo";
import { AggregateSuperContestCombo } from "../../outputs/AggregateSuperContestCombo";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SuperContestCombo)
export class AggregateSuperContestComboResolver {
  @TypeGraphQL.Query(_returns => AggregateSuperContestCombo, {
    nullable: false
  })
  async aggregateSuperContestCombo(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateSuperContestComboArgs): Promise<AggregateSuperContestCombo> {
    return getPrismaFromContext(ctx).superContestCombos.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
