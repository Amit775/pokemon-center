import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Experience } from "../../../models/Experience";
import { GrowthRates } from "../../../models/GrowthRates";
import { PokemonSpecies } from "../../../models/PokemonSpecies";
import { GrowthRatesExperienceArgs } from "./args/GrowthRatesExperienceArgs";
import { GrowthRatesSpeciesArgs } from "./args/GrowthRatesSpeciesArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => GrowthRates)
export class GrowthRatesRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [PokemonSpecies], {
    nullable: false
  })
  async species(@TypeGraphQL.Root() growthRates: GrowthRates, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GrowthRatesSpeciesArgs): Promise<PokemonSpecies[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).growthRates.findUniqueOrThrow({
      where: {
        id: growthRates.id,
      },
    }).species({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [Experience], {
    nullable: false
  })
  async experience(@TypeGraphQL.Root() growthRates: GrowthRates, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GrowthRatesExperienceArgs): Promise<Experience[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).growthRates.findUniqueOrThrow({
      where: {
        id: growthRates.id,
      },
    }).experience({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
