import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregatePokemonSpeciesArgs } from "./args/AggregatePokemonSpeciesArgs";
import { FindFirstPokemonSpeciesArgs } from "./args/FindFirstPokemonSpeciesArgs";
import { FindFirstPokemonSpeciesOrThrowArgs } from "./args/FindFirstPokemonSpeciesOrThrowArgs";
import { FindManyPokemonSpeciesArgs } from "./args/FindManyPokemonSpeciesArgs";
import { FindUniquePokemonSpeciesArgs } from "./args/FindUniquePokemonSpeciesArgs";
import { FindUniquePokemonSpeciesOrThrowArgs } from "./args/FindUniquePokemonSpeciesOrThrowArgs";
import { GroupByPokemonSpeciesArgs } from "./args/GroupByPokemonSpeciesArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { PokemonSpecies } from "../../../models/PokemonSpecies";
import { AggregatePokemonSpecies } from "../../outputs/AggregatePokemonSpecies";
import { PokemonSpeciesGroupBy } from "../../outputs/PokemonSpeciesGroupBy";

@TypeGraphQL.Resolver(_of => PokemonSpecies)
export class PokemonSpeciesCrudResolver {
  @TypeGraphQL.Query(_returns => AggregatePokemonSpecies, {
    nullable: false
  })
  async aggregatePokemonSpecies(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregatePokemonSpeciesArgs): Promise<AggregatePokemonSpecies> {
    return getPrismaFromContext(ctx).pokemonSpecies.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Query(_returns => PokemonSpecies, {
    nullable: true
  })
  async findFirstPokemonSpecies(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstPokemonSpeciesArgs): Promise<PokemonSpecies | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonSpecies.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => PokemonSpecies, {
    nullable: true
  })
  async findFirstPokemonSpeciesOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstPokemonSpeciesOrThrowArgs): Promise<PokemonSpecies | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonSpecies.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [PokemonSpecies], {
    nullable: false
  })
  async findManyPokemonSpecies(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyPokemonSpeciesArgs): Promise<PokemonSpecies[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonSpecies.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => PokemonSpecies, {
    nullable: true
  })
  async findUniquePokemonSpecies(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniquePokemonSpeciesArgs): Promise<PokemonSpecies | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonSpecies.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => PokemonSpecies, {
    nullable: true
  })
  async findUniquePokemonSpeciesOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniquePokemonSpeciesOrThrowArgs): Promise<PokemonSpecies | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonSpecies.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [PokemonSpeciesGroupBy], {
    nullable: false
  })
  async groupByPokemonSpecies(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByPokemonSpeciesArgs): Promise<PokemonSpeciesGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonSpecies.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

}