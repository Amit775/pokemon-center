import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateContestComboArgs } from "./args/AggregateContestComboArgs";
import { ContestCombo } from "../../../models/ContestCombo";
import { AggregateContestCombo } from "../../outputs/AggregateContestCombo";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ContestCombo)
export class AggregateContestComboResolver {
  @TypeGraphQL.Query(_returns => AggregateContestCombo, {
    nullable: false
  })
  async aggregateContestCombo(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateContestComboArgs): Promise<AggregateContestCombo> {
    return getPrismaFromContext(ctx).contestCombos.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
