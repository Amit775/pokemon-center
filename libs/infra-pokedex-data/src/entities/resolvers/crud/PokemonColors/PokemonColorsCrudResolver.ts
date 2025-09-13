import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregatePokemonColorsArgs } from "./args/AggregatePokemonColorsArgs";
import { FindFirstPokemonColorsArgs } from "./args/FindFirstPokemonColorsArgs";
import { FindFirstPokemonColorsOrThrowArgs } from "./args/FindFirstPokemonColorsOrThrowArgs";
import { FindManyPokemonColorsArgs } from "./args/FindManyPokemonColorsArgs";
import { FindUniquePokemonColorsArgs } from "./args/FindUniquePokemonColorsArgs";
import { FindUniquePokemonColorsOrThrowArgs } from "./args/FindUniquePokemonColorsOrThrowArgs";
import { GroupByPokemonColorsArgs } from "./args/GroupByPokemonColorsArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { PokemonColors } from "../../../models/PokemonColors";
import { AggregatePokemonColors } from "../../outputs/AggregatePokemonColors";
import { PokemonColorsGroupBy } from "../../outputs/PokemonColorsGroupBy";

@TypeGraphQL.Resolver(_of => PokemonColors)
export class PokemonColorsCrudResolver {
  @TypeGraphQL.Query(_returns => AggregatePokemonColors, {
    nullable: false
  })
  async aggregatePokemonColors(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregatePokemonColorsArgs): Promise<AggregatePokemonColors> {
    return getPrismaFromContext(ctx).pokemonColors.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Query(_returns => PokemonColors, {
    nullable: true
  })
  async findFirstPokemonColors(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstPokemonColorsArgs): Promise<PokemonColors | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonColors.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => PokemonColors, {
    nullable: true
  })
  async findFirstPokemonColorsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstPokemonColorsOrThrowArgs): Promise<PokemonColors | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonColors.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [PokemonColors], {
    nullable: false
  })
  async findManyPokemonColors(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyPokemonColorsArgs): Promise<PokemonColors[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonColors.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => PokemonColors, {
    nullable: true
  })
  async findUniquePokemonColors(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniquePokemonColorsArgs): Promise<PokemonColors | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonColors.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => PokemonColors, {
    nullable: true
  })
  async findUniquePokemonColorsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniquePokemonColorsOrThrowArgs): Promise<PokemonColors | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonColors.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [PokemonColorsGroupBy], {
    nullable: false
  })
  async groupByPokemonColors(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByPokemonColorsArgs): Promise<PokemonColorsGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonColors.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

}