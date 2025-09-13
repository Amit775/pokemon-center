import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregatePokemonHabitatsArgs } from "./args/AggregatePokemonHabitatsArgs";
import { FindFirstPokemonHabitatsArgs } from "./args/FindFirstPokemonHabitatsArgs";
import { FindFirstPokemonHabitatsOrThrowArgs } from "./args/FindFirstPokemonHabitatsOrThrowArgs";
import { FindManyPokemonHabitatsArgs } from "./args/FindManyPokemonHabitatsArgs";
import { FindUniquePokemonHabitatsArgs } from "./args/FindUniquePokemonHabitatsArgs";
import { FindUniquePokemonHabitatsOrThrowArgs } from "./args/FindUniquePokemonHabitatsOrThrowArgs";
import { GroupByPokemonHabitatsArgs } from "./args/GroupByPokemonHabitatsArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { PokemonHabitats } from "../../../models/PokemonHabitats";
import { AggregatePokemonHabitats } from "../../outputs/AggregatePokemonHabitats";
import { PokemonHabitatsGroupBy } from "../../outputs/PokemonHabitatsGroupBy";

@TypeGraphQL.Resolver(_of => PokemonHabitats)
export class PokemonHabitatsCrudResolver {
  @TypeGraphQL.Query(_returns => AggregatePokemonHabitats, {
    nullable: false
  })
  async aggregatePokemonHabitats(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregatePokemonHabitatsArgs): Promise<AggregatePokemonHabitats> {
    return getPrismaFromContext(ctx).pokemonHabitats.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Query(_returns => PokemonHabitats, {
    nullable: true
  })
  async findFirstPokemonHabitats(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstPokemonHabitatsArgs): Promise<PokemonHabitats | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonHabitats.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => PokemonHabitats, {
    nullable: true
  })
  async findFirstPokemonHabitatsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstPokemonHabitatsOrThrowArgs): Promise<PokemonHabitats | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonHabitats.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [PokemonHabitats], {
    nullable: false
  })
  async findManyPokemonHabitats(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyPokemonHabitatsArgs): Promise<PokemonHabitats[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonHabitats.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => PokemonHabitats, {
    nullable: true
  })
  async findUniquePokemonHabitats(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniquePokemonHabitatsArgs): Promise<PokemonHabitats | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonHabitats.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => PokemonHabitats, {
    nullable: true
  })
  async findUniquePokemonHabitatsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniquePokemonHabitatsOrThrowArgs): Promise<PokemonHabitats | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonHabitats.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [PokemonHabitatsGroupBy], {
    nullable: false
  })
  async groupByPokemonHabitats(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByPokemonHabitatsArgs): Promise<PokemonHabitatsGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonHabitats.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

}