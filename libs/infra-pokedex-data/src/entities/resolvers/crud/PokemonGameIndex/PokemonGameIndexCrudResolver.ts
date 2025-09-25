import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregatePokemonGameIndexArgs } from "./args/AggregatePokemonGameIndexArgs";
import { FindFirstPokemonGameIndexArgs } from "./args/FindFirstPokemonGameIndexArgs";
import { FindFirstPokemonGameIndexOrThrowArgs } from "./args/FindFirstPokemonGameIndexOrThrowArgs";
import { FindManyPokemonGameIndexArgs } from "./args/FindManyPokemonGameIndexArgs";
import { FindUniquePokemonGameIndexArgs } from "./args/FindUniquePokemonGameIndexArgs";
import { FindUniquePokemonGameIndexOrThrowArgs } from "./args/FindUniquePokemonGameIndexOrThrowArgs";
import { GroupByPokemonGameIndexArgs } from "./args/GroupByPokemonGameIndexArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { PokemonGameIndex } from "../../../models/PokemonGameIndex";
import { AggregatePokemonGameIndex } from "../../outputs/AggregatePokemonGameIndex";
import { PokemonGameIndexGroupBy } from "../../outputs/PokemonGameIndexGroupBy";

@TypeGraphQL.Resolver(_of => PokemonGameIndex)
export class PokemonGameIndexCrudResolver {
  @TypeGraphQL.Query(_returns => AggregatePokemonGameIndex, {
    nullable: false
  })
  async aggregatePokemonGameIndex(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregatePokemonGameIndexArgs): Promise<AggregatePokemonGameIndex> {
    return getPrismaFromContext(ctx).pokemonGameIndices.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Query(_returns => PokemonGameIndex, {
    nullable: true
  })
  async findFirstPokemonGameIndex(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstPokemonGameIndexArgs): Promise<PokemonGameIndex | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonGameIndices.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => PokemonGameIndex, {
    nullable: true
  })
  async findFirstPokemonGameIndexOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstPokemonGameIndexOrThrowArgs): Promise<PokemonGameIndex | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonGameIndices.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [PokemonGameIndex], {
    nullable: false
  })
  async pokemonGameIndices(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyPokemonGameIndexArgs): Promise<PokemonGameIndex[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonGameIndices.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => PokemonGameIndex, {
    nullable: true
  })
  async pokemonGameIndex(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniquePokemonGameIndexArgs): Promise<PokemonGameIndex | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonGameIndices.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => PokemonGameIndex, {
    nullable: true
  })
  async getPokemonGameIndex(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniquePokemonGameIndexOrThrowArgs): Promise<PokemonGameIndex | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonGameIndices.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [PokemonGameIndexGroupBy], {
    nullable: false
  })
  async groupByPokemonGameIndex(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByPokemonGameIndexArgs): Promise<PokemonGameIndexGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonGameIndices.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

}