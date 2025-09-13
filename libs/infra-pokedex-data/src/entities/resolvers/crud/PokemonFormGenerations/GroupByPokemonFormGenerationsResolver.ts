import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByPokemonFormGenerationsArgs } from "./args/GroupByPokemonFormGenerationsArgs";
import { PokemonFormGenerations } from "../../../models/PokemonFormGenerations";
import { PokemonFormGenerationsGroupBy } from "../../outputs/PokemonFormGenerationsGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonFormGenerations)
export class GroupByPokemonFormGenerationsResolver {
  @TypeGraphQL.Query(_returns => [PokemonFormGenerationsGroupBy], {
    nullable: false
  })
  async groupByPokemonFormGenerations(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByPokemonFormGenerationsArgs): Promise<PokemonFormGenerationsGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonFormGenerations.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
