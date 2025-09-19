import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindManyGrowthRatesArgs } from "./args/FindManyGrowthRatesArgs";
import { GrowthRates } from "../../../models/GrowthRates";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => GrowthRates)
export class FindManyGrowthRatesResolver {
  @TypeGraphQL.Query(_returns => [GrowthRates], {
    nullable: false
  })
  async findManyGrowthRates(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyGrowthRatesArgs): Promise<GrowthRates[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).growthRates.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
