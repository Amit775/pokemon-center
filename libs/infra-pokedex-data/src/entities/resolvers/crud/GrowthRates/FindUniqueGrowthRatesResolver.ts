import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueGrowthRatesArgs } from "./args/FindUniqueGrowthRatesArgs";
import { GrowthRates } from "../../../models/GrowthRates";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => GrowthRates)
export class FindUniqueGrowthRatesResolver {
  @TypeGraphQL.Query(_returns => GrowthRates, {
    nullable: true
  })
  async findUniqueGrowthRates(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueGrowthRatesArgs): Promise<GrowthRates | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).growthRates.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
