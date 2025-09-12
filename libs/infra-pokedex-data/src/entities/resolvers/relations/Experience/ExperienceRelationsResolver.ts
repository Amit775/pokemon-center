import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Experience } from "../../../models/Experience";
import { GrowthRates } from "../../../models/GrowthRates";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Experience)
export class ExperienceRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => GrowthRates, {
    nullable: false
  })
  async growthRate(@TypeGraphQL.Root() experience: Experience, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<GrowthRates> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).experience.findUniqueOrThrow({
      where: {
        growth_rate_id_level: {
          growth_rate_id: experience.growth_rate_id,
          level: experience.level,
        },
      },
    }).growthRate({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
