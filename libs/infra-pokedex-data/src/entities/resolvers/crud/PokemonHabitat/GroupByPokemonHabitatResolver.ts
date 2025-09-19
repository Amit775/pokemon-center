import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByPokemonHabitatArgs } from "./args/GroupByPokemonHabitatArgs";
import { PokemonHabitat } from "../../../models/PokemonHabitat";
import { PokemonHabitatGroupBy } from "../../outputs/PokemonHabitatGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonHabitat)
export class GroupByPokemonHabitatResolver {
  @TypeGraphQL.Query(_returns => [PokemonHabitatGroupBy], {
    nullable: false
  })
  async groupByPokemonHabitat(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByPokemonHabitatArgs): Promise<PokemonHabitatGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonHabitats.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
