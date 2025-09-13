import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregatePokemonFormGenerationsArgs } from "./args/AggregatePokemonFormGenerationsArgs";
import { PokemonFormGenerations } from "../../../models/PokemonFormGenerations";
import { AggregatePokemonFormGenerations } from "../../outputs/AggregatePokemonFormGenerations";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonFormGenerations)
export class AggregatePokemonFormGenerationsResolver {
  @TypeGraphQL.Query(_returns => AggregatePokemonFormGenerations, {
    nullable: false
  })
  async aggregatePokemonFormGenerations(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregatePokemonFormGenerationsArgs): Promise<AggregatePokemonFormGenerations> {
    return getPrismaFromContext(ctx).pokemonFormGenerations.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
