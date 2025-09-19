import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnLocationAreaEncounterRateArgs } from "./args/CreateManyAndReturnLocationAreaEncounterRateArgs";
import { LocationAreaEncounterRate } from "../../../models/LocationAreaEncounterRate";
import { CreateManyAndReturnLocationAreaEncounterRate } from "../../outputs/CreateManyAndReturnLocationAreaEncounterRate";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => LocationAreaEncounterRate)
export class CreateManyAndReturnLocationAreaEncounterRateResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnLocationAreaEncounterRate], {
    nullable: false
  })
  async createManyAndReturnLocationAreaEncounterRate(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnLocationAreaEncounterRateArgs): Promise<CreateManyAndReturnLocationAreaEncounterRate[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).locationAreaEncounterRates.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
