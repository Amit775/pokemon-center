import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregatePokemonStatArgs } from "./args/AggregatePokemonStatArgs";
import { PokemonStat } from "../../../models/PokemonStat";
import { AggregatePokemonStat } from "../../outputs/AggregatePokemonStat";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonStat)
export class AggregatePokemonStatResolver {
  @TypeGraphQL.Query(_returns => AggregatePokemonStat, {
    nullable: false
  })
  async aggregatePokemonStat(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregatePokemonStatArgs): Promise<AggregatePokemonStat> {
    return getPrismaFromContext(ctx).pokemonStats.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
