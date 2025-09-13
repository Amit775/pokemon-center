import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregatePokemonStatsArgs } from "./args/AggregatePokemonStatsArgs";
import { FindFirstPokemonStatsArgs } from "./args/FindFirstPokemonStatsArgs";
import { FindFirstPokemonStatsOrThrowArgs } from "./args/FindFirstPokemonStatsOrThrowArgs";
import { FindManyPokemonStatsArgs } from "./args/FindManyPokemonStatsArgs";
import { FindUniquePokemonStatsArgs } from "./args/FindUniquePokemonStatsArgs";
import { FindUniquePokemonStatsOrThrowArgs } from "./args/FindUniquePokemonStatsOrThrowArgs";
import { GroupByPokemonStatsArgs } from "./args/GroupByPokemonStatsArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { PokemonStats } from "../../../models/PokemonStats";
import { AggregatePokemonStats } from "../../outputs/AggregatePokemonStats";
import { PokemonStatsGroupBy } from "../../outputs/PokemonStatsGroupBy";

@TypeGraphQL.Resolver(_of => PokemonStats)
export class PokemonStatsCrudResolver {
  @TypeGraphQL.Query(_returns => AggregatePokemonStats, {
    nullable: false
  })
  async aggregatePokemonStats(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregatePokemonStatsArgs): Promise<AggregatePokemonStats> {
    return getPrismaFromContext(ctx).pokemonStats.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Query(_returns => PokemonStats, {
    nullable: true
  })
  async findFirstPokemonStats(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstPokemonStatsArgs): Promise<PokemonStats | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonStats.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => PokemonStats, {
    nullable: true
  })
  async findFirstPokemonStatsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstPokemonStatsOrThrowArgs): Promise<PokemonStats | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonStats.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [PokemonStats], {
    nullable: false
  })
  async findManyPokemonStats(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyPokemonStatsArgs): Promise<PokemonStats[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonStats.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => PokemonStats, {
    nullable: true
  })
  async findUniquePokemonStats(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniquePokemonStatsArgs): Promise<PokemonStats | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonStats.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

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

  @TypeGraphQL.Query(_returns => [PokemonStatsGroupBy], {
    nullable: false
  })
  async groupByPokemonStats(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByPokemonStatsArgs): Promise<PokemonStatsGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonStats.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

}