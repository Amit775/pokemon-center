import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { PokemonColors } from "../../../models/PokemonColors";
import { PokemonSpecies } from "../../../models/PokemonSpecies";
import { PokemonColorsSpeciesArgs } from "./args/PokemonColorsSpeciesArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonColors)
export class PokemonColorsRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [PokemonSpecies], {
    nullable: false
  })
  async species(@TypeGraphQL.Root() pokemonColors: PokemonColors, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: PokemonColorsSpeciesArgs): Promise<PokemonSpecies[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonColors.findUniqueOrThrow({
      where: {
        id: pokemonColors.id,
      },
    }).species({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
