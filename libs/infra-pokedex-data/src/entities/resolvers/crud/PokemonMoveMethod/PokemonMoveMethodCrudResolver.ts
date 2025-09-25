import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregatePokemonMoveMethodArgs } from "./args/AggregatePokemonMoveMethodArgs";
import { FindFirstPokemonMoveMethodArgs } from "./args/FindFirstPokemonMoveMethodArgs";
import { FindFirstPokemonMoveMethodOrThrowArgs } from "./args/FindFirstPokemonMoveMethodOrThrowArgs";
import { FindManyPokemonMoveMethodArgs } from "./args/FindManyPokemonMoveMethodArgs";
import { FindUniquePokemonMoveMethodArgs } from "./args/FindUniquePokemonMoveMethodArgs";
import { FindUniquePokemonMoveMethodOrThrowArgs } from "./args/FindUniquePokemonMoveMethodOrThrowArgs";
import { GroupByPokemonMoveMethodArgs } from "./args/GroupByPokemonMoveMethodArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { PokemonMoveMethod } from "../../../models/PokemonMoveMethod";
import { AggregatePokemonMoveMethod } from "../../outputs/AggregatePokemonMoveMethod";
import { PokemonMoveMethodGroupBy } from "../../outputs/PokemonMoveMethodGroupBy";

@TypeGraphQL.Resolver(_of => PokemonMoveMethod)
export class PokemonMoveMethodCrudResolver {
  @TypeGraphQL.Query(_returns => AggregatePokemonMoveMethod, {
    nullable: false
  })
  async aggregatePokemonMoveMethod(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregatePokemonMoveMethodArgs): Promise<AggregatePokemonMoveMethod> {
    return getPrismaFromContext(ctx).pokemonMoveMethods.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Query(_returns => PokemonMoveMethod, {
    nullable: true
  })
  async findFirstPokemonMoveMethod(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstPokemonMoveMethodArgs): Promise<PokemonMoveMethod | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonMoveMethods.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => PokemonMoveMethod, {
    nullable: true
  })
  async findFirstPokemonMoveMethodOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstPokemonMoveMethodOrThrowArgs): Promise<PokemonMoveMethod | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonMoveMethods.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [PokemonMoveMethod], {
    nullable: false
  })
  async pokemonMoveMethods(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyPokemonMoveMethodArgs): Promise<PokemonMoveMethod[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonMoveMethods.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => PokemonMoveMethod, {
    nullable: true
  })
  async pokemonMoveMethod(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniquePokemonMoveMethodArgs): Promise<PokemonMoveMethod | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonMoveMethods.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => PokemonMoveMethod, {
    nullable: true
  })
  async getPokemonMoveMethod(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniquePokemonMoveMethodOrThrowArgs): Promise<PokemonMoveMethod | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonMoveMethods.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [PokemonMoveMethodGroupBy], {
    nullable: false
  })
  async groupByPokemonMoveMethod(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByPokemonMoveMethodArgs): Promise<PokemonMoveMethodGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonMoveMethods.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

}