import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregatePokemonDexNumbersArgs } from "./args/AggregatePokemonDexNumbersArgs";
import { FindFirstPokemonDexNumbersArgs } from "./args/FindFirstPokemonDexNumbersArgs";
import { FindFirstPokemonDexNumbersOrThrowArgs } from "./args/FindFirstPokemonDexNumbersOrThrowArgs";
import { FindManyPokemonDexNumbersArgs } from "./args/FindManyPokemonDexNumbersArgs";
import { FindUniquePokemonDexNumbersArgs } from "./args/FindUniquePokemonDexNumbersArgs";
import { FindUniquePokemonDexNumbersOrThrowArgs } from "./args/FindUniquePokemonDexNumbersOrThrowArgs";
import { GroupByPokemonDexNumbersArgs } from "./args/GroupByPokemonDexNumbersArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { PokemonDexNumbers } from "../../../models/PokemonDexNumbers";
import { AggregatePokemonDexNumbers } from "../../outputs/AggregatePokemonDexNumbers";
import { PokemonDexNumbersGroupBy } from "../../outputs/PokemonDexNumbersGroupBy";

@TypeGraphQL.Resolver(_of => PokemonDexNumbers)
export class PokemonDexNumbersCrudResolver {
  @TypeGraphQL.Query(_returns => AggregatePokemonDexNumbers, {
    nullable: false
  })
  async aggregatePokemonDexNumbers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregatePokemonDexNumbersArgs): Promise<AggregatePokemonDexNumbers> {
    return getPrismaFromContext(ctx).pokemonDexNumbers.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Query(_returns => PokemonDexNumbers, {
    nullable: true
  })
  async findFirstPokemonDexNumbers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstPokemonDexNumbersArgs): Promise<PokemonDexNumbers | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonDexNumbers.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => PokemonDexNumbers, {
    nullable: true
  })
  async findFirstPokemonDexNumbersOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstPokemonDexNumbersOrThrowArgs): Promise<PokemonDexNumbers | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonDexNumbers.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [PokemonDexNumbers], {
    nullable: false
  })
  async findManyPokemonDexNumbers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyPokemonDexNumbersArgs): Promise<PokemonDexNumbers[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonDexNumbers.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => PokemonDexNumbers, {
    nullable: true
  })
  async findUniquePokemonDexNumbers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniquePokemonDexNumbersArgs): Promise<PokemonDexNumbers | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonDexNumbers.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => PokemonDexNumbers, {
    nullable: true
  })
  async findUniquePokemonDexNumbersOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniquePokemonDexNumbersOrThrowArgs): Promise<PokemonDexNumbers | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonDexNumbers.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [PokemonDexNumbersGroupBy], {
    nullable: false
  })
  async groupByPokemonDexNumbers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByPokemonDexNumbersArgs): Promise<PokemonDexNumbersGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonDexNumbers.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

}