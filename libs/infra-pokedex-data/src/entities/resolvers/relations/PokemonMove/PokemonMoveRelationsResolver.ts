import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Move } from "../../../models/Move";
import { Pokemon } from "../../../models/Pokemon";
import { PokemonMove } from "../../../models/PokemonMove";
import { PokemonMoveMethod } from "../../../models/PokemonMoveMethod";
import { VersionGroup } from "../../../models/VersionGroup";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonMove)
export class PokemonMoveRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Pokemon, {
    nullable: false
  })
  async pokemon(@TypeGraphQL.Root() pokemonMove: PokemonMove, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Pokemon> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonMoves.findUniqueOrThrow({
      where: {
        pokemon_id_version_group_id_move_id_pokemon_move_method_id: {
          pokemon_id: pokemonMove.pokemon_id,
          version_group_id: pokemonMove.version_group_id,
          move_id: pokemonMove.move_id,
          pokemon_move_method_id: pokemonMove.pokemon_move_method_id,
        },
      },
    }).pokemon({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => VersionGroup, {
    nullable: false
  })
  async versionGroup(@TypeGraphQL.Root() pokemonMove: PokemonMove, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<VersionGroup> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonMoves.findUniqueOrThrow({
      where: {
        pokemon_id_version_group_id_move_id_pokemon_move_method_id: {
          pokemon_id: pokemonMove.pokemon_id,
          version_group_id: pokemonMove.version_group_id,
          move_id: pokemonMove.move_id,
          pokemon_move_method_id: pokemonMove.pokemon_move_method_id,
        },
      },
    }).versionGroup({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Move, {
    nullable: false
  })
  async move(@TypeGraphQL.Root() pokemonMove: PokemonMove, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Move> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonMoves.findUniqueOrThrow({
      where: {
        pokemon_id_version_group_id_move_id_pokemon_move_method_id: {
          pokemon_id: pokemonMove.pokemon_id,
          version_group_id: pokemonMove.version_group_id,
          move_id: pokemonMove.move_id,
          pokemon_move_method_id: pokemonMove.pokemon_move_method_id,
        },
      },
    }).move({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => PokemonMoveMethod, {
    nullable: false
  })
  async moveMethod(@TypeGraphQL.Root() pokemonMove: PokemonMove, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<PokemonMoveMethod> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonMoves.findUniqueOrThrow({
      where: {
        pokemon_id_version_group_id_move_id_pokemon_move_method_id: {
          pokemon_id: pokemonMove.pokemon_id,
          version_group_id: pokemonMove.version_group_id,
          move_id: pokemonMove.move_id,
          pokemon_move_method_id: pokemonMove.pokemon_move_method_id,
        },
      },
    }).moveMethod({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
