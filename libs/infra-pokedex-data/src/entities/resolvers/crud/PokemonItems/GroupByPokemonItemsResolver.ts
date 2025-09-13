import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByPokemonItemsArgs } from "./args/GroupByPokemonItemsArgs";
import { PokemonItems } from "../../../models/PokemonItems";
import { PokemonItemsGroupBy } from "../../outputs/PokemonItemsGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonItems)
export class GroupByPokemonItemsResolver {
  @TypeGraphQL.Query(_returns => [PokemonItemsGroupBy], {
    nullable: false
  })
  async groupByPokemonItems(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByPokemonItemsArgs): Promise<PokemonItemsGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonItems.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
