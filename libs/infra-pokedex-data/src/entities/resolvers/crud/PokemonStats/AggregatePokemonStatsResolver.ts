import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregatePokemonStatsArgs } from "./args/AggregatePokemonStatsArgs";
import { PokemonStats } from "../../../models/PokemonStats";
import { AggregatePokemonStats } from "../../outputs/AggregatePokemonStats";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonStats)
export class AggregatePokemonStatsResolver {
  @TypeGraphQL.Query(_returns => AggregatePokemonStats, {
    nullable: false
  })
  async aggregatePokemonStats(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregatePokemonStatsArgs): Promise<AggregatePokemonStats> {
    return getPrismaFromContext(ctx).pokemonStats.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
