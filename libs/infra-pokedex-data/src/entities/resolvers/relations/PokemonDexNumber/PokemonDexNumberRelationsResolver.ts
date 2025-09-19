import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Pokedex } from "../../../models/Pokedex";
import { PokemonDexNumber } from "../../../models/PokemonDexNumber";
import { PokemonSpecies } from "../../../models/PokemonSpecies";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonDexNumber)
export class PokemonDexNumberRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => PokemonSpecies, {
    nullable: false
  })
  async species(@TypeGraphQL.Root() pokemonDexNumber: PokemonDexNumber, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<PokemonSpecies> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonDexNumbers.findUniqueOrThrow({
      where: {
        species_id_pokedex_id: {
          species_id: pokemonDexNumber.species_id,
          pokedex_id: pokemonDexNumber.pokedex_id,
        },
      },
    }).species({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Pokedex, {
    nullable: false
  })
  async pokedex(@TypeGraphQL.Root() pokemonDexNumber: PokemonDexNumber, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Pokedex> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonDexNumbers.findUniqueOrThrow({
      where: {
        species_id_pokedex_id: {
          species_id: pokemonDexNumber.species_id,
          pokedex_id: pokemonDexNumber.pokedex_id,
        },
      },
    }).pokedex({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
