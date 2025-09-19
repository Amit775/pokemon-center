import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByPokemonEggGroupArgs } from "./args/GroupByPokemonEggGroupArgs";
import { PokemonEggGroup } from "../../../models/PokemonEggGroup";
import { PokemonEggGroupGroupBy } from "../../outputs/PokemonEggGroupGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonEggGroup)
export class GroupByPokemonEggGroupResolver {
  @TypeGraphQL.Query(_returns => [PokemonEggGroupGroupBy], {
    nullable: false
  })
  async groupByPokemonEggGroup(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByPokemonEggGroupArgs): Promise<PokemonEggGroupGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonEggGroups.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
