import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByPokemonMovesArgs } from "./args/GroupByPokemonMovesArgs";
import { PokemonMoves } from "../../../models/PokemonMoves";
import { PokemonMovesGroupBy } from "../../outputs/PokemonMovesGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonMoves)
export class GroupByPokemonMovesResolver {
  @TypeGraphQL.Query(_returns => [PokemonMovesGroupBy], {
    nullable: false
  })
  async groupByPokemonMoves(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByPokemonMovesArgs): Promise<PokemonMovesGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonMoves.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
