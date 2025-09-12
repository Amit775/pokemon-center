import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByPokemonColorsArgs } from "./args/GroupByPokemonColorsArgs";
import { PokemonColors } from "../../../models/PokemonColors";
import { PokemonColorsGroupBy } from "../../outputs/PokemonColorsGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonColors)
export class GroupByPokemonColorsResolver {
  @TypeGraphQL.Query(_returns => [PokemonColorsGroupBy], {
    nullable: false
  })
  async groupByPokemonColors(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByPokemonColorsArgs): Promise<PokemonColorsGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonColors.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
