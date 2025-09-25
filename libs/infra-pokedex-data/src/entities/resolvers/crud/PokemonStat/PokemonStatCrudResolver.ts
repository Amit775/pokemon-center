import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregatePokemonStatArgs } from "./args/AggregatePokemonStatArgs";
import { FindFirstPokemonStatArgs } from "./args/FindFirstPokemonStatArgs";
import { FindFirstPokemonStatOrThrowArgs } from "./args/FindFirstPokemonStatOrThrowArgs";
import { FindManyPokemonStatArgs } from "./args/FindManyPokemonStatArgs";
import { FindUniquePokemonStatArgs } from "./args/FindUniquePokemonStatArgs";
import { FindUniquePokemonStatOrThrowArgs } from "./args/FindUniquePokemonStatOrThrowArgs";
import { GroupByPokemonStatArgs } from "./args/GroupByPokemonStatArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { PokemonStat } from "../../../models/PokemonStat";
import { AggregatePokemonStat } from "../../outputs/AggregatePokemonStat";
import { PokemonStatGroupBy } from "../../outputs/PokemonStatGroupBy";

@TypeGraphQL.Resolver(_of => PokemonStat)
export class PokemonStatCrudResolver {
  @TypeGraphQL.Query(_returns => AggregatePokemonStat, {
    nullable: false
  })
  async aggregatePokemonStat(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregatePokemonStatArgs): Promise<AggregatePokemonStat> {
    return getPrismaFromContext(ctx).pokemonStats.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Query(_returns => PokemonStat, {
    nullable: true
  })
  async findFirstPokemonStat(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstPokemonStatArgs): Promise<PokemonStat | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonStats.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => PokemonStat, {
    nullable: true
  })
  async findFirstPokemonStatOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstPokemonStatOrThrowArgs): Promise<PokemonStat | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonStats.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [PokemonStat], {
    nullable: false
  })
  async pokemonStats(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyPokemonStatArgs): Promise<PokemonStat[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonStats.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => PokemonStat, {
    nullable: true
  })
  async pokemonStat(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniquePokemonStatArgs): Promise<PokemonStat | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonStats.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => PokemonStat, {
    nullable: true
  })
  async getPokemonStat(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniquePokemonStatOrThrowArgs): Promise<PokemonStat | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonStats.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [PokemonStatGroupBy], {
    nullable: false
  })
  async groupByPokemonStat(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByPokemonStatArgs): Promise<PokemonStatGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonStats.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

}