import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstLocationAreaEncounterRatesOrThrowArgs } from "./args/FindFirstLocationAreaEncounterRatesOrThrowArgs";
import { LocationAreaEncounterRates } from "../../../models/LocationAreaEncounterRates";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => LocationAreaEncounterRates)
export class FindFirstLocationAreaEncounterRatesOrThrowResolver {
  @TypeGraphQL.Query(_returns => LocationAreaEncounterRates, {
    nullable: true
  })
  async findFirstLocationAreaEncounterRatesOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstLocationAreaEncounterRatesOrThrowArgs): Promise<LocationAreaEncounterRates | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).locationAreaEncounterRates.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
