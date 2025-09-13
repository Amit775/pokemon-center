import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueLocationAreaEncounterRatesArgs } from "./args/FindUniqueLocationAreaEncounterRatesArgs";
import { LocationAreaEncounterRates } from "../../../models/LocationAreaEncounterRates";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => LocationAreaEncounterRates)
export class FindUniqueLocationAreaEncounterRatesResolver {
  @TypeGraphQL.Query(_returns => LocationAreaEncounterRates, {
    nullable: true
  })
  async findUniqueLocationAreaEncounterRates(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueLocationAreaEncounterRatesArgs): Promise<LocationAreaEncounterRates | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).locationAreaEncounterRates.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
