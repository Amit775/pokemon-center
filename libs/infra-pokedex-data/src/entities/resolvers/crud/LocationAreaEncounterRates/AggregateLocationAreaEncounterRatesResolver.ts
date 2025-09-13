import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateLocationAreaEncounterRatesArgs } from "./args/AggregateLocationAreaEncounterRatesArgs";
import { LocationAreaEncounterRates } from "../../../models/LocationAreaEncounterRates";
import { AggregateLocationAreaEncounterRates } from "../../outputs/AggregateLocationAreaEncounterRates";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => LocationAreaEncounterRates)
export class AggregateLocationAreaEncounterRatesResolver {
  @TypeGraphQL.Query(_returns => AggregateLocationAreaEncounterRates, {
    nullable: false
  })
  async aggregateLocationAreaEncounterRates(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateLocationAreaEncounterRatesArgs): Promise<AggregateLocationAreaEncounterRates> {
    return getPrismaFromContext(ctx).locationAreaEncounterRates.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
