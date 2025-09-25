import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregatePokemonColorArgs } from "./args/AggregatePokemonColorArgs";
import { FindFirstPokemonColorArgs } from "./args/FindFirstPokemonColorArgs";
import { FindFirstPokemonColorOrThrowArgs } from "./args/FindFirstPokemonColorOrThrowArgs";
import { FindManyPokemonColorArgs } from "./args/FindManyPokemonColorArgs";
import { FindUniquePokemonColorArgs } from "./args/FindUniquePokemonColorArgs";
import { FindUniquePokemonColorOrThrowArgs } from "./args/FindUniquePokemonColorOrThrowArgs";
import { GroupByPokemonColorArgs } from "./args/GroupByPokemonColorArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { PokemonColor } from "../../../models/PokemonColor";
import { AggregatePokemonColor } from "../../outputs/AggregatePokemonColor";
import { PokemonColorGroupBy } from "../../outputs/PokemonColorGroupBy";

@TypeGraphQL.Resolver(_of => PokemonColor)
export class PokemonColorCrudResolver {
  @TypeGraphQL.Query(_returns => AggregatePokemonColor, {
    nullable: false
  })
  async aggregatePokemonColor(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregatePokemonColorArgs): Promise<AggregatePokemonColor> {
    return getPrismaFromContext(ctx).pokemonColors.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Query(_returns => PokemonColor, {
    nullable: true
  })
  async findFirstPokemonColor(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstPokemonColorArgs): Promise<PokemonColor | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonColors.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => PokemonColor, {
    nullable: true
  })
  async findFirstPokemonColorOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstPokemonColorOrThrowArgs): Promise<PokemonColor | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonColors.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [PokemonColor], {
    nullable: false
  })
  async pokemonColors(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyPokemonColorArgs): Promise<PokemonColor[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonColors.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => PokemonColor, {
    nullable: true
  })
  async pokemonColor(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniquePokemonColorArgs): Promise<PokemonColor | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonColors.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => PokemonColor, {
    nullable: true
  })
  async getPokemonColor(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniquePokemonColorOrThrowArgs): Promise<PokemonColor | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonColors.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [PokemonColorGroupBy], {
    nullable: false
  })
  async groupByPokemonColor(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByPokemonColorArgs): Promise<PokemonColorGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonColors.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

}