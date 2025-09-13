import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Pokemon } from "../../../models/Pokemon";
import { PokemonStats } from "../../../models/PokemonStats";
import { Stats } from "../../../models/Stats";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonStats)
export class PokemonStatsRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Pokemon, {
    nullable: false
  })
  async pokemon(@TypeGraphQL.Root() pokemonStats: PokemonStats, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Pokemon> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonStats.findUniqueOrThrow({
      where: {
        pokemon_id_stat_id: {
          pokemon_id: pokemonStats.pokemon_id,
          stat_id: pokemonStats.stat_id,
        },
      },
    }).pokemon({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Stats, {
    nullable: false
  })
  async stat(@TypeGraphQL.Root() pokemonStats: PokemonStats, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Stats> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonStats.findUniqueOrThrow({
      where: {
        pokemon_id_stat_id: {
          pokemon_id: pokemonStats.pokemon_id,
          stat_id: pokemonStats.stat_id,
        },
      },
    }).stat({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
