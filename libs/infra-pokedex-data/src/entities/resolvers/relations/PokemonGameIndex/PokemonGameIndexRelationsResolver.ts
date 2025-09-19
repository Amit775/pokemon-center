import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Pokemon } from "../../../models/Pokemon";
import { PokemonGameIndex } from "../../../models/PokemonGameIndex";
import { Version } from "../../../models/Version";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonGameIndex)
export class PokemonGameIndexRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Pokemon, {
    nullable: false
  })
  async pokemon(@TypeGraphQL.Root() pokemonGameIndex: PokemonGameIndex, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Pokemon> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonGameIndices.findUniqueOrThrow({
      where: {
        pokemon_id_version_id: {
          pokemon_id: pokemonGameIndex.pokemon_id,
          version_id: pokemonGameIndex.version_id,
        },
      },
    }).pokemon({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Version, {
    nullable: false
  })
  async version(@TypeGraphQL.Root() pokemonGameIndex: PokemonGameIndex, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Version> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonGameIndices.findUniqueOrThrow({
      where: {
        pokemon_id_version_id: {
          pokemon_id: pokemonGameIndex.pokemon_id,
          version_id: pokemonGameIndex.version_id,
        },
      },
    }).version({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
