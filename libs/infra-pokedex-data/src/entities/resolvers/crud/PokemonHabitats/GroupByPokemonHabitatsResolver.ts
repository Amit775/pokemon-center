import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByPokemonHabitatsArgs } from "./args/GroupByPokemonHabitatsArgs";
import { PokemonHabitats } from "../../../models/PokemonHabitats";
import { PokemonHabitatsGroupBy } from "../../outputs/PokemonHabitatsGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonHabitats)
export class GroupByPokemonHabitatsResolver {
  @TypeGraphQL.Query(_returns => [PokemonHabitatsGroupBy], {
    nullable: false
  })
  async groupByPokemonHabitats(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByPokemonHabitatsArgs): Promise<PokemonHabitatsGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonHabitats.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
