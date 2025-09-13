import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Moves } from "../../../models/Moves";
import { Pokemon } from "../../../models/Pokemon";
import { PokemonMoveMethods } from "../../../models/PokemonMoveMethods";
import { PokemonMoves } from "../../../models/PokemonMoves";
import { VersionGroups } from "../../../models/VersionGroups";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonMoves)
export class PokemonMovesRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Pokemon, {
    nullable: false
  })
  async pokemon(@TypeGraphQL.Root() pokemonMoves: PokemonMoves, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Pokemon> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonMoves.findUniqueOrThrow({
      where: {
        pokemon_id_version_group_id_move_id_pokemon_move_method_id: {
          pokemon_id: pokemonMoves.pokemon_id,
          version_group_id: pokemonMoves.version_group_id,
          move_id: pokemonMoves.move_id,
          pokemon_move_method_id: pokemonMoves.pokemon_move_method_id,
        },
      },
    }).pokemon({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => VersionGroups, {
    nullable: false
  })
  async versionGroup(@TypeGraphQL.Root() pokemonMoves: PokemonMoves, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<VersionGroups> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonMoves.findUniqueOrThrow({
      where: {
        pokemon_id_version_group_id_move_id_pokemon_move_method_id: {
          pokemon_id: pokemonMoves.pokemon_id,
          version_group_id: pokemonMoves.version_group_id,
          move_id: pokemonMoves.move_id,
          pokemon_move_method_id: pokemonMoves.pokemon_move_method_id,
        },
      },
    }).versionGroup({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Moves, {
    nullable: false
  })
  async move(@TypeGraphQL.Root() pokemonMoves: PokemonMoves, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Moves> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonMoves.findUniqueOrThrow({
      where: {
        pokemon_id_version_group_id_move_id_pokemon_move_method_id: {
          pokemon_id: pokemonMoves.pokemon_id,
          version_group_id: pokemonMoves.version_group_id,
          move_id: pokemonMoves.move_id,
          pokemon_move_method_id: pokemonMoves.pokemon_move_method_id,
        },
      },
    }).move({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => PokemonMoveMethods, {
    nullable: false
  })
  async moveMethod(@TypeGraphQL.Root() pokemonMoves: PokemonMoves, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<PokemonMoveMethods> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonMoves.findUniqueOrThrow({
      where: {
        pokemon_id_version_group_id_move_id_pokemon_move_method_id: {
          pokemon_id: pokemonMoves.pokemon_id,
          version_group_id: pokemonMoves.version_group_id,
          move_id: pokemonMoves.move_id,
          pokemon_move_method_id: pokemonMoves.pokemon_move_method_id,
        },
      },
    }).moveMethod({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
