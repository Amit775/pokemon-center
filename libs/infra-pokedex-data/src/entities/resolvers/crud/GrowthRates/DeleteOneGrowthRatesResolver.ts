import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneGrowthRatesArgs } from "./args/DeleteOneGrowthRatesArgs";
import { GrowthRates } from "../../../models/GrowthRates";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => GrowthRates)
export class DeleteOneGrowthRatesResolver {
  @TypeGraphQL.Mutation(_returns => GrowthRates, {
    nullable: true
  })
  async deleteOneGrowthRates(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneGrowthRatesArgs): Promise<GrowthRates | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).growthRates.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
