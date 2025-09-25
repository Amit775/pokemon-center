import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregatePokemonFormGenerationArgs } from "./args/AggregatePokemonFormGenerationArgs";
import { FindFirstPokemonFormGenerationArgs } from "./args/FindFirstPokemonFormGenerationArgs";
import { FindFirstPokemonFormGenerationOrThrowArgs } from "./args/FindFirstPokemonFormGenerationOrThrowArgs";
import { FindManyPokemonFormGenerationArgs } from "./args/FindManyPokemonFormGenerationArgs";
import { FindUniquePokemonFormGenerationArgs } from "./args/FindUniquePokemonFormGenerationArgs";
import { FindUniquePokemonFormGenerationOrThrowArgs } from "./args/FindUniquePokemonFormGenerationOrThrowArgs";
import { GroupByPokemonFormGenerationArgs } from "./args/GroupByPokemonFormGenerationArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { PokemonFormGeneration } from "../../../models/PokemonFormGeneration";
import { AggregatePokemonFormGeneration } from "../../outputs/AggregatePokemonFormGeneration";
import { PokemonFormGenerationGroupBy } from "../../outputs/PokemonFormGenerationGroupBy";

@TypeGraphQL.Resolver(_of => PokemonFormGeneration)
export class PokemonFormGenerationCrudResolver {
  @TypeGraphQL.Query(_returns => AggregatePokemonFormGeneration, {
    nullable: false
  })
  async aggregatePokemonFormGeneration(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregatePokemonFormGenerationArgs): Promise<AggregatePokemonFormGeneration> {
    return getPrismaFromContext(ctx).pokemonFormGenerations.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Query(_returns => PokemonFormGeneration, {
    nullable: true
  })
  async findFirstPokemonFormGeneration(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstPokemonFormGenerationArgs): Promise<PokemonFormGeneration | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonFormGenerations.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => PokemonFormGeneration, {
    nullable: true
  })
  async findFirstPokemonFormGenerationOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstPokemonFormGenerationOrThrowArgs): Promise<PokemonFormGeneration | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonFormGenerations.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [PokemonFormGeneration], {
    nullable: false
  })
  async pokemonFormGenerations(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyPokemonFormGenerationArgs): Promise<PokemonFormGeneration[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonFormGenerations.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => PokemonFormGeneration, {
    nullable: true
  })
  async pokemonFormGeneration(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniquePokemonFormGenerationArgs): Promise<PokemonFormGeneration | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonFormGenerations.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => PokemonFormGeneration, {
    nullable: true
  })
  async getPokemonFormGeneration(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniquePokemonFormGenerationOrThrowArgs): Promise<PokemonFormGeneration | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonFormGenerations.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [PokemonFormGenerationGroupBy], {
    nullable: false
  })
  async groupByPokemonFormGeneration(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByPokemonFormGenerationArgs): Promise<PokemonFormGenerationGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonFormGenerations.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

}