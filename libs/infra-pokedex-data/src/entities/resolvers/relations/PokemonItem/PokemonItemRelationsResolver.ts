import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Item } from "../../../models/Item";
import { Pokemon } from "../../../models/Pokemon";
import { PokemonItem } from "../../../models/PokemonItem";
import { Version } from "../../../models/Version";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonItem)
export class PokemonItemRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Pokemon, {
    nullable: false
  })
  async pokemon(@TypeGraphQL.Root() pokemonItem: PokemonItem, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Pokemon> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonItems.findUniqueOrThrow({
      where: {
        pokemon_id_version_id_item_id: {
          pokemon_id: pokemonItem.pokemon_id,
          version_id: pokemonItem.version_id,
          item_id: pokemonItem.item_id,
        },
      },
    }).pokemon({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Version, {
    nullable: false
  })
  async version(@TypeGraphQL.Root() pokemonItem: PokemonItem, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Version> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonItems.findUniqueOrThrow({
      where: {
        pokemon_id_version_id_item_id: {
          pokemon_id: pokemonItem.pokemon_id,
          version_id: pokemonItem.version_id,
          item_id: pokemonItem.item_id,
        },
      },
    }).version({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Item, {
    nullable: false
  })
  async item(@TypeGraphQL.Root() pokemonItem: PokemonItem, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Item> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonItems.findUniqueOrThrow({
      where: {
        pokemon_id_version_id_item_id: {
          pokemon_id: pokemonItem.pokemon_id,
          version_id: pokemonItem.version_id,
          item_id: pokemonItem.item_id,
        },
      },
    }).item({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
