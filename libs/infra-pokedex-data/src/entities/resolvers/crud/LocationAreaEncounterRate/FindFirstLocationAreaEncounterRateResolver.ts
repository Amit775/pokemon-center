import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstLocationAreaEncounterRateArgs } from "./args/FindFirstLocationAreaEncounterRateArgs";
import { LocationAreaEncounterRate } from "../../../models/LocationAreaEncounterRate";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => LocationAreaEncounterRate)
export class FindFirstLocationAreaEncounterRateResolver {
  @TypeGraphQL.Query(_returns => LocationAreaEncounterRate, {
    nullable: true
  })
  async findFirstLocationAreaEncounterRate(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstLocationAreaEncounterRateArgs): Promise<LocationAreaEncounterRate | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).locationAreaEncounterRates.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
