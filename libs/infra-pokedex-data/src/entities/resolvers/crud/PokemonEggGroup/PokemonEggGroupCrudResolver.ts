import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregatePokemonEggGroupArgs } from "./args/AggregatePokemonEggGroupArgs";
import { FindFirstPokemonEggGroupArgs } from "./args/FindFirstPokemonEggGroupArgs";
import { FindFirstPokemonEggGroupOrThrowArgs } from "./args/FindFirstPokemonEggGroupOrThrowArgs";
import { FindManyPokemonEggGroupArgs } from "./args/FindManyPokemonEggGroupArgs";
import { FindUniquePokemonEggGroupArgs } from "./args/FindUniquePokemonEggGroupArgs";
import { FindUniquePokemonEggGroupOrThrowArgs } from "./args/FindUniquePokemonEggGroupOrThrowArgs";
import { GroupByPokemonEggGroupArgs } from "./args/GroupByPokemonEggGroupArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { PokemonEggGroup } from "../../../models/PokemonEggGroup";
import { AggregatePokemonEggGroup } from "../../outputs/AggregatePokemonEggGroup";
import { PokemonEggGroupGroupBy } from "../../outputs/PokemonEggGroupGroupBy";

@TypeGraphQL.Resolver(_of => PokemonEggGroup)
export class PokemonEggGroupCrudResolver {
  @TypeGraphQL.Query(_returns => AggregatePokemonEggGroup, {
    nullable: false
  })
  async aggregatePokemonEggGroup(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregatePokemonEggGroupArgs): Promise<AggregatePokemonEggGroup> {
    return getPrismaFromContext(ctx).pokemonEggGroups.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Query(_returns => PokemonEggGroup, {
    nullable: true
  })
  async findFirstPokemonEggGroup(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstPokemonEggGroupArgs): Promise<PokemonEggGroup | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonEggGroups.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => PokemonEggGroup, {
    nullable: true
  })
  async findFirstPokemonEggGroupOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstPokemonEggGroupOrThrowArgs): Promise<PokemonEggGroup | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonEggGroups.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [PokemonEggGroup], {
    nullable: false
  })
  async pokemonEggGroups(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyPokemonEggGroupArgs): Promise<PokemonEggGroup[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonEggGroups.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => PokemonEggGroup, {
    nullable: true
  })
  async pokemonEggGroup(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniquePokemonEggGroupArgs): Promise<PokemonEggGroup | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonEggGroups.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => PokemonEggGroup, {
    nullable: true
  })
  async getPokemonEggGroup(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniquePokemonEggGroupOrThrowArgs): Promise<PokemonEggGroup | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonEggGroups.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [PokemonEggGroupGroupBy], {
    nullable: false
  })
  async groupByPokemonEggGroup(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByPokemonEggGroupArgs): Promise<PokemonEggGroupGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonEggGroups.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

}