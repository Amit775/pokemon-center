import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Pokemon } from "../../../models/Pokemon";
import { PokemonTypes } from "../../../models/PokemonTypes";
import { Types } from "../../../models/Types";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonTypes)
export class PokemonTypesRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Pokemon, {
    nullable: false
  })
  async pokemon(@TypeGraphQL.Root() pokemonTypes: PokemonTypes, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Pokemon> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonTypes.findUniqueOrThrow({
      where: {
        pokemon_id_type_id: {
          pokemon_id: pokemonTypes.pokemon_id,
          type_id: pokemonTypes.type_id,
        },
      },
    }).pokemon({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Types, {
    nullable: false
  })
  async type(@TypeGraphQL.Root() pokemonTypes: PokemonTypes, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Types> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonTypes.findUniqueOrThrow({
      where: {
        pokemon_id_type_id: {
          pokemon_id: pokemonTypes.pokemon_id,
          type_id: pokemonTypes.type_id,
        },
      },
    }).type({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
