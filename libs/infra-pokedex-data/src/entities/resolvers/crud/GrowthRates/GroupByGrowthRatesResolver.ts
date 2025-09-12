import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByGrowthRatesArgs } from "./args/GroupByGrowthRatesArgs";
import { GrowthRates } from "../../../models/GrowthRates";
import { GrowthRatesGroupBy } from "../../outputs/GrowthRatesGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => GrowthRates)
export class GroupByGrowthRatesResolver {
  @TypeGraphQL.Query(_returns => [GrowthRatesGroupBy], {
    nullable: false
  })
  async groupByGrowthRates(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByGrowthRatesArgs): Promise<GrowthRatesGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).growthRates.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
