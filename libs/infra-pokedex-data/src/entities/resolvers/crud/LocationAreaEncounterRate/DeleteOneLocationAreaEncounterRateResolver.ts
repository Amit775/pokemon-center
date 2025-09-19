import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneLocationAreaEncounterRateArgs } from "./args/DeleteOneLocationAreaEncounterRateArgs";
import { LocationAreaEncounterRate } from "../../../models/LocationAreaEncounterRate";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => LocationAreaEncounterRate)
export class DeleteOneLocationAreaEncounterRateResolver {
  @TypeGraphQL.Mutation(_returns => LocationAreaEncounterRate, {
    nullable: true
  })
  async deleteOneLocationAreaEncounterRate(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneLocationAreaEncounterRateArgs): Promise<LocationAreaEncounterRate | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).locationAreaEncounterRates.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
