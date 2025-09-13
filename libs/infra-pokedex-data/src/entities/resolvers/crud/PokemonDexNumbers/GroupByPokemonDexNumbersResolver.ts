import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByPokemonDexNumbersArgs } from "./args/GroupByPokemonDexNumbersArgs";
import { PokemonDexNumbers } from "../../../models/PokemonDexNumbers";
import { PokemonDexNumbersGroupBy } from "../../outputs/PokemonDexNumbersGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonDexNumbers)
export class GroupByPokemonDexNumbersResolver {
  @TypeGraphQL.Query(_returns => [PokemonDexNumbersGroupBy], {
    nullable: false
  })
  async groupByPokemonDexNumbers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByPokemonDexNumbersArgs): Promise<PokemonDexNumbersGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonDexNumbers.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
