import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Items } from "../../../models/Items";
import { Pokemon } from "../../../models/Pokemon";
import { PokemonItems } from "../../../models/PokemonItems";
import { Versions } from "../../../models/Versions";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonItems)
export class PokemonItemsRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Pokemon, {
    nullable: false
  })
  async pokemon(@TypeGraphQL.Root() pokemonItems: PokemonItems, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Pokemon> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonItems.findUniqueOrThrow({
      where: {
        pokemon_id_version_id_item_id: {
          pokemon_id: pokemonItems.pokemon_id,
          version_id: pokemonItems.version_id,
          item_id: pokemonItems.item_id,
        },
      },
    }).pokemon({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Versions, {
    nullable: false
  })
  async version(@TypeGraphQL.Root() pokemonItems: PokemonItems, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Versions> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonItems.findUniqueOrThrow({
      where: {
        pokemon_id_version_id_item_id: {
          pokemon_id: pokemonItems.pokemon_id,
          version_id: pokemonItems.version_id,
          item_id: pokemonItems.item_id,
        },
      },
    }).version({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Items, {
    nullable: false
  })
  async item(@TypeGraphQL.Root() pokemonItems: PokemonItems, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Items> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonItems.findUniqueOrThrow({
      where: {
        pokemon_id_version_id_item_id: {
          pokemon_id: pokemonItems.pokemon_id,
          version_id: pokemonItems.version_id,
          item_id: pokemonItems.item_id,
        },
      },
    }).item({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
