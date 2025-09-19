import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Ability } from "../../../models/Ability";
import { Pokemon } from "../../../models/Pokemon";
import { PokemonAbility } from "../../../models/PokemonAbility";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonAbility)
export class PokemonAbilityRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Pokemon, {
    nullable: false
  })
  async pokemon(@TypeGraphQL.Root() pokemonAbility: PokemonAbility, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Pokemon> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonAbilities.findUniqueOrThrow({
      where: {
        pokemon_id_ability_id: {
          pokemon_id: pokemonAbility.pokemon_id,
          ability_id: pokemonAbility.ability_id,
        },
      },
    }).pokemon({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Ability, {
    nullable: false
  })
  async ability(@TypeGraphQL.Root() pokemonAbility: PokemonAbility, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Ability> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonAbilities.findUniqueOrThrow({
      where: {
        pokemon_id_ability_id: {
          pokemon_id: pokemonAbility.pokemon_id,
          ability_id: pokemonAbility.ability_id,
        },
      },
    }).ability({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
