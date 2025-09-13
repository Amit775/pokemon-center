import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregatePokemonEggGroupsArgs } from "./args/AggregatePokemonEggGroupsArgs";
import { FindFirstPokemonEggGroupsArgs } from "./args/FindFirstPokemonEggGroupsArgs";
import { FindFirstPokemonEggGroupsOrThrowArgs } from "./args/FindFirstPokemonEggGroupsOrThrowArgs";
import { FindManyPokemonEggGroupsArgs } from "./args/FindManyPokemonEggGroupsArgs";
import { FindUniquePokemonEggGroupsArgs } from "./args/FindUniquePokemonEggGroupsArgs";
import { FindUniquePokemonEggGroupsOrThrowArgs } from "./args/FindUniquePokemonEggGroupsOrThrowArgs";
import { GroupByPokemonEggGroupsArgs } from "./args/GroupByPokemonEggGroupsArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { PokemonEggGroups } from "../../../models/PokemonEggGroups";
import { AggregatePokemonEggGroups } from "../../outputs/AggregatePokemonEggGroups";
import { PokemonEggGroupsGroupBy } from "../../outputs/PokemonEggGroupsGroupBy";

@TypeGraphQL.Resolver(_of => PokemonEggGroups)
export class PokemonEggGroupsCrudResolver {
  @TypeGraphQL.Query(_returns => AggregatePokemonEggGroups, {
    nullable: false
  })
  async aggregatePokemonEggGroups(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregatePokemonEggGroupsArgs): Promise<AggregatePokemonEggGroups> {
    return getPrismaFromContext(ctx).pokemonEggGroups.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Query(_returns => PokemonEggGroups, {
    nullable: true
  })
  async findFirstPokemonEggGroups(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstPokemonEggGroupsArgs): Promise<PokemonEggGroups | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonEggGroups.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => PokemonEggGroups, {
    nullable: true
  })
  async findFirstPokemonEggGroupsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstPokemonEggGroupsOrThrowArgs): Promise<PokemonEggGroups | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonEggGroups.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [PokemonEggGroups], {
    nullable: false
  })
  async findManyPokemonEggGroups(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyPokemonEggGroupsArgs): Promise<PokemonEggGroups[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonEggGroups.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => PokemonEggGroups, {
    nullable: true
  })
  async findUniquePokemonEggGroups(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniquePokemonEggGroupsArgs): Promise<PokemonEggGroups | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonEggGroups.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => PokemonEggGroups, {
    nullable: true
  })
  async findUniquePokemonEggGroupsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniquePokemonEggGroupsOrThrowArgs): Promise<PokemonEggGroups | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonEggGroups.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [PokemonEggGroupsGroupBy], {
    nullable: false
  })
  async groupByPokemonEggGroups(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByPokemonEggGroupsArgs): Promise<PokemonEggGroupsGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonEggGroups.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

}