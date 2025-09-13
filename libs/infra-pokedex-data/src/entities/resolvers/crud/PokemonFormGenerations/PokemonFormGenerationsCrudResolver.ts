import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregatePokemonFormGenerationsArgs } from "./args/AggregatePokemonFormGenerationsArgs";
import { FindFirstPokemonFormGenerationsArgs } from "./args/FindFirstPokemonFormGenerationsArgs";
import { FindFirstPokemonFormGenerationsOrThrowArgs } from "./args/FindFirstPokemonFormGenerationsOrThrowArgs";
import { FindManyPokemonFormGenerationsArgs } from "./args/FindManyPokemonFormGenerationsArgs";
import { FindUniquePokemonFormGenerationsArgs } from "./args/FindUniquePokemonFormGenerationsArgs";
import { FindUniquePokemonFormGenerationsOrThrowArgs } from "./args/FindUniquePokemonFormGenerationsOrThrowArgs";
import { GroupByPokemonFormGenerationsArgs } from "./args/GroupByPokemonFormGenerationsArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { PokemonFormGenerations } from "../../../models/PokemonFormGenerations";
import { AggregatePokemonFormGenerations } from "../../outputs/AggregatePokemonFormGenerations";
import { PokemonFormGenerationsGroupBy } from "../../outputs/PokemonFormGenerationsGroupBy";

@TypeGraphQL.Resolver(_of => PokemonFormGenerations)
export class PokemonFormGenerationsCrudResolver {
  @TypeGraphQL.Query(_returns => AggregatePokemonFormGenerations, {
    nullable: false
  })
  async aggregatePokemonFormGenerations(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregatePokemonFormGenerationsArgs): Promise<AggregatePokemonFormGenerations> {
    return getPrismaFromContext(ctx).pokemonFormGenerations.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Query(_returns => PokemonFormGenerations, {
    nullable: true
  })
  async findFirstPokemonFormGenerations(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstPokemonFormGenerationsArgs): Promise<PokemonFormGenerations | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonFormGenerations.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => PokemonFormGenerations, {
    nullable: true
  })
  async findFirstPokemonFormGenerationsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstPokemonFormGenerationsOrThrowArgs): Promise<PokemonFormGenerations | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonFormGenerations.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [PokemonFormGenerations], {
    nullable: false
  })
  async findManyPokemonFormGenerations(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyPokemonFormGenerationsArgs): Promise<PokemonFormGenerations[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonFormGenerations.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => PokemonFormGenerations, {
    nullable: true
  })
  async findUniquePokemonFormGenerations(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniquePokemonFormGenerationsArgs): Promise<PokemonFormGenerations | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonFormGenerations.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => PokemonFormGenerations, {
    nullable: true
  })
  async findUniquePokemonFormGenerationsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniquePokemonFormGenerationsOrThrowArgs): Promise<PokemonFormGenerations | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonFormGenerations.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [PokemonFormGenerationsGroupBy], {
    nullable: false
  })
  async groupByPokemonFormGenerations(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByPokemonFormGenerationsArgs): Promise<PokemonFormGenerationsGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonFormGenerations.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

}