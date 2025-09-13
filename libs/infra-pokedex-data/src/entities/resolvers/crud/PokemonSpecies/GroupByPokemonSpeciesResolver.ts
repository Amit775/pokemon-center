import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByPokemonSpeciesArgs } from "./args/GroupByPokemonSpeciesArgs";
import { PokemonSpecies } from "../../../models/PokemonSpecies";
import { PokemonSpeciesGroupBy } from "../../outputs/PokemonSpeciesGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonSpecies)
export class GroupByPokemonSpeciesResolver {
  @TypeGraphQL.Query(_returns => [PokemonSpeciesGroupBy], {
    nullable: false
  })
  async groupByPokemonSpecies(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByPokemonSpeciesArgs): Promise<PokemonSpeciesGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonSpecies.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
