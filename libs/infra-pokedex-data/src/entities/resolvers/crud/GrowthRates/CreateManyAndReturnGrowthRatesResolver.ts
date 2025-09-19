import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnGrowthRatesArgs } from "./args/CreateManyAndReturnGrowthRatesArgs";
import { GrowthRates } from "../../../models/GrowthRates";
import { CreateManyAndReturnGrowthRates } from "../../outputs/CreateManyAndReturnGrowthRates";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => GrowthRates)
export class CreateManyAndReturnGrowthRatesResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnGrowthRates], {
    nullable: false
  })
  async createManyAndReturnGrowthRates(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnGrowthRatesArgs): Promise<CreateManyAndReturnGrowthRates[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).growthRates.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
