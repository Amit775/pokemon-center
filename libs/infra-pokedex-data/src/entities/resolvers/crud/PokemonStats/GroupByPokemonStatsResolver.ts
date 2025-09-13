import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByPokemonStatsArgs } from "./args/GroupByPokemonStatsArgs";
import { PokemonStats } from "../../../models/PokemonStats";
import { PokemonStatsGroupBy } from "../../outputs/PokemonStatsGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonStats)
export class GroupByPokemonStatsResolver {
  @TypeGraphQL.Query(_returns => [PokemonStatsGroupBy], {
    nullable: false
  })
  async groupByPokemonStats(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByPokemonStatsArgs): Promise<PokemonStatsGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonStats.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
