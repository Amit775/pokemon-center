import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueLocationAreaEncounterRateArgs } from "./args/FindUniqueLocationAreaEncounterRateArgs";
import { LocationAreaEncounterRate } from "../../../models/LocationAreaEncounterRate";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => LocationAreaEncounterRate)
export class FindUniqueLocationAreaEncounterRateResolver {
  @TypeGraphQL.Query(_returns => LocationAreaEncounterRate, {
    nullable: true
  })
  async locationAreaEncounterRate(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueLocationAreaEncounterRateArgs): Promise<LocationAreaEncounterRate | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).locationAreaEncounterRates.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
