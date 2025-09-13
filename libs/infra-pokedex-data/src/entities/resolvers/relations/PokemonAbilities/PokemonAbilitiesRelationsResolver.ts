import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Abilities } from "../../../models/Abilities";
import { Pokemon } from "../../../models/Pokemon";
import { PokemonAbilities } from "../../../models/PokemonAbilities";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonAbilities)
export class PokemonAbilitiesRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Pokemon, {
    nullable: false
  })
  async pokemon(@TypeGraphQL.Root() pokemonAbilities: PokemonAbilities, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Pokemon> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonAbilities.findUniqueOrThrow({
      where: {
        pokemon_id_ability_id: {
          pokemon_id: pokemonAbilities.pokemon_id,
          ability_id: pokemonAbilities.ability_id,
        },
      },
    }).pokemon({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Abilities, {
    nullable: false
  })
  async ability(@TypeGraphQL.Root() pokemonAbilities: PokemonAbilities, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Abilities> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonAbilities.findUniqueOrThrow({
      where: {
        pokemon_id_ability_id: {
          pokemon_id: pokemonAbilities.pokemon_id,
          ability_id: pokemonAbilities.ability_id,
        },
      },
    }).ability({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
