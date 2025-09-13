import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Pokedexes } from "../../../models/Pokedexes";
import { PokemonDexNumbers } from "../../../models/PokemonDexNumbers";
import { PokemonSpecies } from "../../../models/PokemonSpecies";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonDexNumbers)
export class PokemonDexNumbersRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => PokemonSpecies, {
    nullable: false
  })
  async species(@TypeGraphQL.Root() pokemonDexNumbers: PokemonDexNumbers, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<PokemonSpecies> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonDexNumbers.findUniqueOrThrow({
      where: {
        species_id_pokedex_id: {
          species_id: pokemonDexNumbers.species_id,
          pokedex_id: pokemonDexNumbers.pokedex_id,
        },
      },
    }).species({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Pokedexes, {
    nullable: false
  })
  async pokedex(@TypeGraphQL.Root() pokemonDexNumbers: PokemonDexNumbers, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Pokedexes> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonDexNumbers.findUniqueOrThrow({
      where: {
        species_id_pokedex_id: {
          species_id: pokemonDexNumbers.species_id,
          pokedex_id: pokemonDexNumbers.pokedex_id,
        },
      },
    }).pokedex({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
