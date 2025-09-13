import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregatePokemonSpeciesArgs } from "./args/AggregatePokemonSpeciesArgs";
import { PokemonSpecies } from "../../../models/PokemonSpecies";
import { AggregatePokemonSpecies } from "../../outputs/AggregatePokemonSpecies";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonSpecies)
export class AggregatePokemonSpeciesResolver {
  @TypeGraphQL.Query(_returns => AggregatePokemonSpecies, {
    nullable: false
  })
  async aggregatePokemonSpecies(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregatePokemonSpeciesArgs): Promise<AggregatePokemonSpecies> {
    return getPrismaFromContext(ctx).pokemonSpecies.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
