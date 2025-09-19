import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregatePokemonHabitatArgs } from "./args/AggregatePokemonHabitatArgs";
import { PokemonHabitat } from "../../../models/PokemonHabitat";
import { AggregatePokemonHabitat } from "../../outputs/AggregatePokemonHabitat";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonHabitat)
export class AggregatePokemonHabitatResolver {
  @TypeGraphQL.Query(_returns => AggregatePokemonHabitat, {
    nullable: false
  })
  async aggregatePokemonHabitat(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregatePokemonHabitatArgs): Promise<AggregatePokemonHabitat> {
    return getPrismaFromContext(ctx).pokemonHabitats.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
