import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Pokemon } from "../../../models/Pokemon";
import { PokemonType } from "../../../models/PokemonType";
import { Type } from "../../../models/Type";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonType)
export class PokemonTypeRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Pokemon, {
    nullable: false
  })
  async pokemon(@TypeGraphQL.Root() pokemonType: PokemonType, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Pokemon> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonTypes.findUniqueOrThrow({
      where: {
        pokemon_id_type_id: {
          pokemon_id: pokemonType.pokemon_id,
          type_id: pokemonType.type_id,
        },
      },
    }).pokemon({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Type, {
    nullable: false
  })
  async type(@TypeGraphQL.Root() pokemonType: PokemonType, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Type> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonTypes.findUniqueOrThrow({
      where: {
        pokemon_id_type_id: {
          pokemon_id: pokemonType.pokemon_id,
          type_id: pokemonType.type_id,
        },
      },
    }).type({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
