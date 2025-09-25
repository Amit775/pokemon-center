import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregatePokemonAbilityArgs } from "./args/AggregatePokemonAbilityArgs";
import { FindFirstPokemonAbilityArgs } from "./args/FindFirstPokemonAbilityArgs";
import { FindFirstPokemonAbilityOrThrowArgs } from "./args/FindFirstPokemonAbilityOrThrowArgs";
import { FindManyPokemonAbilityArgs } from "./args/FindManyPokemonAbilityArgs";
import { FindUniquePokemonAbilityArgs } from "./args/FindUniquePokemonAbilityArgs";
import { FindUniquePokemonAbilityOrThrowArgs } from "./args/FindUniquePokemonAbilityOrThrowArgs";
import { GroupByPokemonAbilityArgs } from "./args/GroupByPokemonAbilityArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { PokemonAbility } from "../../../models/PokemonAbility";
import { AggregatePokemonAbility } from "../../outputs/AggregatePokemonAbility";
import { PokemonAbilityGroupBy } from "../../outputs/PokemonAbilityGroupBy";

@TypeGraphQL.Resolver(_of => PokemonAbility)
export class PokemonAbilityCrudResolver {
  @TypeGraphQL.Query(_returns => AggregatePokemonAbility, {
    nullable: false
  })
  async aggregatePokemonAbility(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregatePokemonAbilityArgs): Promise<AggregatePokemonAbility> {
    return getPrismaFromContext(ctx).pokemonAbilities.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Query(_returns => PokemonAbility, {
    nullable: true
  })
  async findFirstPokemonAbility(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstPokemonAbilityArgs): Promise<PokemonAbility | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonAbilities.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => PokemonAbility, {
    nullable: true
  })
  async findFirstPokemonAbilityOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstPokemonAbilityOrThrowArgs): Promise<PokemonAbility | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonAbilities.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [PokemonAbility], {
    nullable: false
  })
  async pokemonAbilities(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyPokemonAbilityArgs): Promise<PokemonAbility[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonAbilities.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => PokemonAbility, {
    nullable: true
  })
  async pokemonAbility(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniquePokemonAbilityArgs): Promise<PokemonAbility | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonAbilities.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => PokemonAbility, {
    nullable: true
  })
  async getPokemonAbility(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniquePokemonAbilityOrThrowArgs): Promise<PokemonAbility | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonAbilities.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [PokemonAbilityGroupBy], {
    nullable: false
  })
  async groupByPokemonAbility(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByPokemonAbilityArgs): Promise<PokemonAbilityGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonAbilities.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

}