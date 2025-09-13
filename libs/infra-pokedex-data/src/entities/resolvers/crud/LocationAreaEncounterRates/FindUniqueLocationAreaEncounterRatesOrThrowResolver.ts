import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueLocationAreaEncounterRatesOrThrowArgs } from "./args/FindUniqueLocationAreaEncounterRatesOrThrowArgs";
import { LocationAreaEncounterRates } from "../../../models/LocationAreaEncounterRates";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => LocationAreaEncounterRates)
export class FindUniqueLocationAreaEncounterRatesOrThrowResolver {
  @TypeGraphQL.Query(_returns => LocationAreaEncounterRates, {
    nullable: true
  })
  async findUniqueLocationAreaEncounterRatesOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueLocationAreaEncounterRatesOrThrowArgs): Promise<LocationAreaEncounterRates | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).locationAreaEncounterRates.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
