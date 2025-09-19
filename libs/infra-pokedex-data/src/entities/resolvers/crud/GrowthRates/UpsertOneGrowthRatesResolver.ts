import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneGrowthRatesArgs } from "./args/UpsertOneGrowthRatesArgs";
import { GrowthRates } from "../../../models/GrowthRates";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => GrowthRates)
export class UpsertOneGrowthRatesResolver {
  @TypeGraphQL.Mutation(_returns => GrowthRates, {
    nullable: false
  })
  async upsertOneGrowthRates(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneGrowthRatesArgs): Promise<GrowthRates> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).growthRates.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
