import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregatePokemonMoveMethodsArgs } from "./args/AggregatePokemonMoveMethodsArgs";
import { FindFirstPokemonMoveMethodsArgs } from "./args/FindFirstPokemonMoveMethodsArgs";
import { FindFirstPokemonMoveMethodsOrThrowArgs } from "./args/FindFirstPokemonMoveMethodsOrThrowArgs";
import { FindManyPokemonMoveMethodsArgs } from "./args/FindManyPokemonMoveMethodsArgs";
import { FindUniquePokemonMoveMethodsArgs } from "./args/FindUniquePokemonMoveMethodsArgs";
import { FindUniquePokemonMoveMethodsOrThrowArgs } from "./args/FindUniquePokemonMoveMethodsOrThrowArgs";
import { GroupByPokemonMoveMethodsArgs } from "./args/GroupByPokemonMoveMethodsArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { PokemonMoveMethods } from "../../../models/PokemonMoveMethods";
import { AggregatePokemonMoveMethods } from "../../outputs/AggregatePokemonMoveMethods";
import { PokemonMoveMethodsGroupBy } from "../../outputs/PokemonMoveMethodsGroupBy";

@TypeGraphQL.Resolver(_of => PokemonMoveMethods)
export class PokemonMoveMethodsCrudResolver {
  @TypeGraphQL.Query(_returns => AggregatePokemonMoveMethods, {
    nullable: false
  })
  async aggregatePokemonMoveMethods(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregatePokemonMoveMethodsArgs): Promise<AggregatePokemonMoveMethods> {
    return getPrismaFromContext(ctx).pokemonMoveMethods.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Query(_returns => PokemonMoveMethods, {
    nullable: true
  })
  async findFirstPokemonMoveMethods(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstPokemonMoveMethodsArgs): Promise<PokemonMoveMethods | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonMoveMethods.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => PokemonMoveMethods, {
    nullable: true
  })
  async findFirstPokemonMoveMethodsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstPokemonMoveMethodsOrThrowArgs): Promise<PokemonMoveMethods | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonMoveMethods.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [PokemonMoveMethods], {
    nullable: false
  })
  async findManyPokemonMoveMethods(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyPokemonMoveMethodsArgs): Promise<PokemonMoveMethods[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonMoveMethods.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => PokemonMoveMethods, {
    nullable: true
  })
  async findUniquePokemonMoveMethods(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniquePokemonMoveMethodsArgs): Promise<PokemonMoveMethods | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonMoveMethods.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => PokemonMoveMethods, {
    nullable: true
  })
  async findUniquePokemonMoveMethodsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniquePokemonMoveMethodsOrThrowArgs): Promise<PokemonMoveMethods | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonMoveMethods.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [PokemonMoveMethodsGroupBy], {
    nullable: false
  })
  async groupByPokemonMoveMethods(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByPokemonMoveMethodsArgs): Promise<PokemonMoveMethodsGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonMoveMethods.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

}