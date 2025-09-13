import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateGrowthRatesArgs } from "./args/AggregateGrowthRatesArgs";
import { GrowthRates } from "../../../models/GrowthRates";
import { AggregateGrowthRates } from "../../outputs/AggregateGrowthRates";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => GrowthRates)
export class AggregateGrowthRatesResolver {
  @TypeGraphQL.Query(_returns => AggregateGrowthRates, {
    nullable: false
  })
  async aggregateGrowthRates(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateGrowthRatesArgs): Promise<AggregateGrowthRates> {
    return getPrismaFromContext(ctx).growthRates.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
