import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregatePokemonFormGenerationArgs } from "./args/AggregatePokemonFormGenerationArgs";
import { PokemonFormGeneration } from "../../../models/PokemonFormGeneration";
import { AggregatePokemonFormGeneration } from "../../outputs/AggregatePokemonFormGeneration";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonFormGeneration)
export class AggregatePokemonFormGenerationResolver {
  @TypeGraphQL.Query(_returns => AggregatePokemonFormGeneration, {
    nullable: false
  })
  async aggregatePokemonFormGeneration(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregatePokemonFormGenerationArgs): Promise<AggregatePokemonFormGeneration> {
    return getPrismaFromContext(ctx).pokemonFormGenerations.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
