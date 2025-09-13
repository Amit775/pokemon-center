import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByLocationAreaEncounterRatesArgs } from "./args/GroupByLocationAreaEncounterRatesArgs";
import { LocationAreaEncounterRates } from "../../../models/LocationAreaEncounterRates";
import { LocationAreaEncounterRatesGroupBy } from "../../outputs/LocationAreaEncounterRatesGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => LocationAreaEncounterRates)
export class GroupByLocationAreaEncounterRatesResolver {
  @TypeGraphQL.Query(_returns => [LocationAreaEncounterRatesGroupBy], {
    nullable: false
  })
  async groupByLocationAreaEncounterRates(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByLocationAreaEncounterRatesArgs): Promise<LocationAreaEncounterRatesGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).locationAreaEncounterRates.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
