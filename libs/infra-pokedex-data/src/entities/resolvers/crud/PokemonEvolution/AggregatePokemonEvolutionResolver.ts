import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregatePokemonEvolutionArgs } from "./args/AggregatePokemonEvolutionArgs";
import { PokemonEvolution } from "../../../models/PokemonEvolution";
import { AggregatePokemonEvolution } from "../../outputs/AggregatePokemonEvolution";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonEvolution)
export class AggregatePokemonEvolutionResolver {
  @TypeGraphQL.Query(_returns => AggregatePokemonEvolution, {
    nullable: false
  })
  async aggregatePokemonEvolution(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregatePokemonEvolutionArgs): Promise<AggregatePokemonEvolution> {
    return getPrismaFromContext(ctx).pokemonEvolution.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
