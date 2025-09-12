import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnLocationAreaEncounterRatesArgs } from "./args/CreateManyAndReturnLocationAreaEncounterRatesArgs";
import { LocationAreaEncounterRates } from "../../../models/LocationAreaEncounterRates";
import { CreateManyAndReturnLocationAreaEncounterRates } from "../../outputs/CreateManyAndReturnLocationAreaEncounterRates";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => LocationAreaEncounterRates)
export class CreateManyAndReturnLocationAreaEncounterRatesResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnLocationAreaEncounterRates], {
    nullable: false
  })
  async createManyAndReturnLocationAreaEncounterRates(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnLocationAreaEncounterRatesArgs): Promise<CreateManyAndReturnLocationAreaEncounterRates[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).locationAreaEncounterRates.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
