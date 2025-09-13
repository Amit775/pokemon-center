import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniquePokemonStatsOrThrowArgs } from "./args/FindUniquePokemonStatsOrThrowArgs";
import { PokemonStats } from "../../../models/PokemonStats";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonStats)
export class FindUniquePokemonStatsOrThrowResolver {
  @TypeGraphQL.Query(_returns => PokemonStats, {
    nullable: true
  })
  async findUniquePokemonStatsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniquePokemonStatsOrThrowArgs): Promise<PokemonStats | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonStats.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
