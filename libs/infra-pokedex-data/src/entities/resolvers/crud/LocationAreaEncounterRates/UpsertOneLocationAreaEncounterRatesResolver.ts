import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneLocationAreaEncounterRatesArgs } from "./args/UpsertOneLocationAreaEncounterRatesArgs";
import { LocationAreaEncounterRates } from "../../../models/LocationAreaEncounterRates";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => LocationAreaEncounterRates)
export class UpsertOneLocationAreaEncounterRatesResolver {
  @TypeGraphQL.Mutation(_returns => LocationAreaEncounterRates, {
    nullable: false
  })
  async upsertOneLocationAreaEncounterRates(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneLocationAreaEncounterRatesArgs): Promise<LocationAreaEncounterRates> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).locationAreaEncounterRates.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
