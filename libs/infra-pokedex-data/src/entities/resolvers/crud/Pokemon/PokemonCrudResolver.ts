import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregatePokemonArgs } from "./args/AggregatePokemonArgs";
import { FindFirstPokemonArgs } from "./args/FindFirstPokemonArgs";
import { FindFirstPokemonOrThrowArgs } from "./args/FindFirstPokemonOrThrowArgs";
import { FindManyPokemonArgs } from "./args/FindManyPokemonArgs";
import { FindUniquePokemonArgs } from "./args/FindUniquePokemonArgs";
import { FindUniquePokemonOrThrowArgs } from "./args/FindUniquePokemonOrThrowArgs";
import { GroupByPokemonArgs } from "./args/GroupByPokemonArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { Pokemon } from "../../../models/Pokemon";
import { AggregatePokemon } from "../../outputs/AggregatePokemon";
import { PokemonGroupBy } from "../../outputs/PokemonGroupBy";

@TypeGraphQL.Resolver(_of => Pokemon)
export class PokemonCrudResolver {
  @TypeGraphQL.Query(_returns => AggregatePokemon, {
    nullable: false
  })
  async aggregatePokemon(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregatePokemonArgs): Promise<AggregatePokemon> {
    return getPrismaFromContext(ctx).pokemon.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Query(_returns => Pokemon, {
    nullable: true
  })
  async findFirstPokemon(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstPokemonArgs): Promise<Pokemon | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemon.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Pokemon, {
    nullable: true
  })
  async findFirstPokemonOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstPokemonOrThrowArgs): Promise<Pokemon | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemon.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [Pokemon], {
    nullable: false
  })
  async findManyPokemon(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyPokemonArgs): Promise<Pokemon[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemon.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Pokemon, {
    nullable: true
  })
  async findUniquePokemon(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniquePokemonArgs): Promise<Pokemon | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemon.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Pokemon, {
    nullable: true
  })
  async findUniquePokemonOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniquePokemonOrThrowArgs): Promise<Pokemon | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemon.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [PokemonGroupBy], {
    nullable: false
  })
  async groupByPokemon(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByPokemonArgs): Promise<PokemonGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemon.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

}