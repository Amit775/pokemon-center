import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstPokemonStatsOrThrowArgs } from "./args/FindFirstPokemonStatsOrThrowArgs";
import { PokemonStats } from "../../../models/PokemonStats";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonStats)
export class FindFirstPokemonStatsOrThrowResolver {
  @TypeGraphQL.Query(_returns => PokemonStats, {
    nullable: true
  })
  async findFirstPokemonStatsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstPokemonStatsOrThrowArgs): Promise<PokemonStats | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonStats.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
