import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Pokemon } from "../../../models/Pokemon";
import { PokemonGameIndices } from "../../../models/PokemonGameIndices";
import { Versions } from "../../../models/Versions";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonGameIndices)
export class PokemonGameIndicesRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Pokemon, {
    nullable: false
  })
  async pokemon(@TypeGraphQL.Root() pokemonGameIndices: PokemonGameIndices, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Pokemon> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonGameIndices.findUniqueOrThrow({
      where: {
        pokemon_id_version_id: {
          pokemon_id: pokemonGameIndices.pokemon_id,
          version_id: pokemonGameIndices.version_id,
        },
      },
    }).pokemon({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Versions, {
    nullable: false
  })
  async version(@TypeGraphQL.Root() pokemonGameIndices: PokemonGameIndices, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Versions> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonGameIndices.findUniqueOrThrow({
      where: {
        pokemon_id_version_id: {
          pokemon_id: pokemonGameIndices.pokemon_id,
          version_id: pokemonGameIndices.version_id,
        },
      },
    }).version({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
