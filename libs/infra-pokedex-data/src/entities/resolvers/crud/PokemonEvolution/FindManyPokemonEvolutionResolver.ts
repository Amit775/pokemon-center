import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindManyPokemonEvolutionArgs } from "./args/FindManyPokemonEvolutionArgs";
import { PokemonEvolution } from "../../../models/PokemonEvolution";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonEvolution)
export class FindManyPokemonEvolutionResolver {
  @TypeGraphQL.Query(_returns => [PokemonEvolution], {
    nullable: false
  })
  async pokemonEvolutions(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyPokemonEvolutionArgs): Promise<PokemonEvolution[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonEvolution.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
