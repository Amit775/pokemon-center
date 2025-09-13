import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregatePokemonEvolutionArgs } from "./args/AggregatePokemonEvolutionArgs";
import { FindFirstPokemonEvolutionArgs } from "./args/FindFirstPokemonEvolutionArgs";
import { FindFirstPokemonEvolutionOrThrowArgs } from "./args/FindFirstPokemonEvolutionOrThrowArgs";
import { FindManyPokemonEvolutionArgs } from "./args/FindManyPokemonEvolutionArgs";
import { FindUniquePokemonEvolutionArgs } from "./args/FindUniquePokemonEvolutionArgs";
import { FindUniquePokemonEvolutionOrThrowArgs } from "./args/FindUniquePokemonEvolutionOrThrowArgs";
import { GroupByPokemonEvolutionArgs } from "./args/GroupByPokemonEvolutionArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { PokemonEvolution } from "../../../models/PokemonEvolution";
import { AggregatePokemonEvolution } from "../../outputs/AggregatePokemonEvolution";
import { PokemonEvolutionGroupBy } from "../../outputs/PokemonEvolutionGroupBy";

@TypeGraphQL.Resolver(_of => PokemonEvolution)
export class PokemonEvolutionCrudResolver {
  @TypeGraphQL.Query(_returns => AggregatePokemonEvolution, {
    nullable: false
  })
  async aggregatePokemonEvolution(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregatePokemonEvolutionArgs): Promise<AggregatePokemonEvolution> {
    return getPrismaFromContext(ctx).pokemonEvolution.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Query(_returns => PokemonEvolution, {
    nullable: true
  })
  async findFirstPokemonEvolution(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstPokemonEvolutionArgs): Promise<PokemonEvolution | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonEvolution.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => PokemonEvolution, {
    nullable: true
  })
  async findFirstPokemonEvolutionOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstPokemonEvolutionOrThrowArgs): Promise<PokemonEvolution | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonEvolution.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [PokemonEvolution], {
    nullable: false
  })
  async pokemonEvolutions(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyPokemonEvolutionArgs): Promise<PokemonEvolution[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonEvolution.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => PokemonEvolution, {
    nullable: true
  })
  async pokemonEvolution(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniquePokemonEvolutionArgs): Promise<PokemonEvolution | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonEvolution.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => PokemonEvolution, {
    nullable: true
  })
  async getPokemonEvolution(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniquePokemonEvolutionOrThrowArgs): Promise<PokemonEvolution | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonEvolution.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [PokemonEvolutionGroupBy], {
    nullable: false
  })
  async groupByPokemonEvolution(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByPokemonEvolutionArgs): Promise<PokemonEvolutionGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonEvolution.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

}