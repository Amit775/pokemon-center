import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByPokemonFormGenerationArgs } from "./args/GroupByPokemonFormGenerationArgs";
import { PokemonFormGeneration } from "../../../models/PokemonFormGeneration";
import { PokemonFormGenerationGroupBy } from "../../outputs/PokemonFormGenerationGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonFormGeneration)
export class GroupByPokemonFormGenerationResolver {
  @TypeGraphQL.Query(_returns => [PokemonFormGenerationGroupBy], {
    nullable: false
  })
  async groupByPokemonFormGeneration(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByPokemonFormGenerationArgs): Promise<PokemonFormGenerationGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonFormGenerations.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
