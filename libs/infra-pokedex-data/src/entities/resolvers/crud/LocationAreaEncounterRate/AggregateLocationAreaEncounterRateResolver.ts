import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateLocationAreaEncounterRateArgs } from "./args/AggregateLocationAreaEncounterRateArgs";
import { LocationAreaEncounterRate } from "../../../models/LocationAreaEncounterRate";
import { AggregateLocationAreaEncounterRate } from "../../outputs/AggregateLocationAreaEncounterRate";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => LocationAreaEncounterRate)
export class AggregateLocationAreaEncounterRateResolver {
  @TypeGraphQL.Query(_returns => AggregateLocationAreaEncounterRate, {
    nullable: false
  })
  async aggregateLocationAreaEncounterRate(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateLocationAreaEncounterRateArgs): Promise<AggregateLocationAreaEncounterRate> {
    return getPrismaFromContext(ctx).locationAreaEncounterRates.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
