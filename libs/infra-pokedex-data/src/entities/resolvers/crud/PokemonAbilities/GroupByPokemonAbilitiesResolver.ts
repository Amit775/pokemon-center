import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByPokemonAbilitiesArgs } from "./args/GroupByPokemonAbilitiesArgs";
import { PokemonAbilities } from "../../../models/PokemonAbilities";
import { PokemonAbilitiesGroupBy } from "../../outputs/PokemonAbilitiesGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonAbilities)
export class GroupByPokemonAbilitiesResolver {
  @TypeGraphQL.Query(_returns => [PokemonAbilitiesGroupBy], {
    nullable: false
  })
  async groupByPokemonAbilities(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByPokemonAbilitiesArgs): Promise<PokemonAbilitiesGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonAbilities.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
