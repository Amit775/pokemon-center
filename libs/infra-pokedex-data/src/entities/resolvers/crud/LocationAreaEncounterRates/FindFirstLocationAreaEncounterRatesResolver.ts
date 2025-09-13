import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstLocationAreaEncounterRatesArgs } from "./args/FindFirstLocationAreaEncounterRatesArgs";
import { LocationAreaEncounterRates } from "../../../models/LocationAreaEncounterRates";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => LocationAreaEncounterRates)
export class FindFirstLocationAreaEncounterRatesResolver {
  @TypeGraphQL.Query(_returns => LocationAreaEncounterRates, {
    nullable: true
  })
  async findFirstLocationAreaEncounterRates(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstLocationAreaEncounterRatesArgs): Promise<LocationAreaEncounterRates | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).locationAreaEncounterRates.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
