import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueLocationAreaEncounterRateOrThrowArgs } from "./args/FindUniqueLocationAreaEncounterRateOrThrowArgs";
import { LocationAreaEncounterRate } from "../../../models/LocationAreaEncounterRate";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => LocationAreaEncounterRate)
export class FindUniqueLocationAreaEncounterRateOrThrowResolver {
  @TypeGraphQL.Query(_returns => LocationAreaEncounterRate, {
    nullable: true
  })
  async getLocationAreaEncounterRate(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueLocationAreaEncounterRateOrThrowArgs): Promise<LocationAreaEncounterRate | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).locationAreaEncounterRates.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
