import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateContestCombosArgs } from "./args/AggregateContestCombosArgs";
import { ContestCombos } from "../../../models/ContestCombos";
import { AggregateContestCombos } from "../../outputs/AggregateContestCombos";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ContestCombos)
export class AggregateContestCombosResolver {
  @TypeGraphQL.Query(_returns => AggregateContestCombos, {
    nullable: false
  })
  async aggregateContestCombos(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateContestCombosArgs): Promise<AggregateContestCombos> {
    return getPrismaFromContext(ctx).contestCombos.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
