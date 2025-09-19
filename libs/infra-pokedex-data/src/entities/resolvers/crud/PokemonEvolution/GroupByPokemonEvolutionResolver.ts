import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByPokemonEvolutionArgs } from "./args/GroupByPokemonEvolutionArgs";
import { PokemonEvolution } from "../../../models/PokemonEvolution";
import { PokemonEvolutionGroupBy } from "../../outputs/PokemonEvolutionGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonEvolution)
export class GroupByPokemonEvolutionResolver {
  @TypeGraphQL.Query(_returns => [PokemonEvolutionGroupBy], {
    nullable: false
  })
  async groupByPokemonEvolution(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByPokemonEvolutionArgs): Promise<PokemonEvolutionGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonEvolution.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
