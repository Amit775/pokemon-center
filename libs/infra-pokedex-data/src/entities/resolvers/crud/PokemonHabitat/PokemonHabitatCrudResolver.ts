import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregatePokemonHabitatArgs } from "./args/AggregatePokemonHabitatArgs";
import { FindFirstPokemonHabitatArgs } from "./args/FindFirstPokemonHabitatArgs";
import { FindFirstPokemonHabitatOrThrowArgs } from "./args/FindFirstPokemonHabitatOrThrowArgs";
import { FindManyPokemonHabitatArgs } from "./args/FindManyPokemonHabitatArgs";
import { FindUniquePokemonHabitatArgs } from "./args/FindUniquePokemonHabitatArgs";
import { FindUniquePokemonHabitatOrThrowArgs } from "./args/FindUniquePokemonHabitatOrThrowArgs";
import { GroupByPokemonHabitatArgs } from "./args/GroupByPokemonHabitatArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { PokemonHabitat } from "../../../models/PokemonHabitat";
import { AggregatePokemonHabitat } from "../../outputs/AggregatePokemonHabitat";
import { PokemonHabitatGroupBy } from "../../outputs/PokemonHabitatGroupBy";

@TypeGraphQL.Resolver(_of => PokemonHabitat)
export class PokemonHabitatCrudResolver {
  @TypeGraphQL.Query(_returns => AggregatePokemonHabitat, {
    nullable: false
  })
  async aggregatePokemonHabitat(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregatePokemonHabitatArgs): Promise<AggregatePokemonHabitat> {
    return getPrismaFromContext(ctx).pokemonHabitats.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Query(_returns => PokemonHabitat, {
    nullable: true
  })
  async findFirstPokemonHabitat(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstPokemonHabitatArgs): Promise<PokemonHabitat | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonHabitats.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => PokemonHabitat, {
    nullable: true
  })
  async findFirstPokemonHabitatOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstPokemonHabitatOrThrowArgs): Promise<PokemonHabitat | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonHabitats.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [PokemonHabitat], {
    nullable: false
  })
  async pokemonHabitats(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyPokemonHabitatArgs): Promise<PokemonHabitat[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonHabitats.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => PokemonHabitat, {
    nullable: true
  })
  async pokemonHabitat(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniquePokemonHabitatArgs): Promise<PokemonHabitat | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonHabitats.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => PokemonHabitat, {
    nullable: true
  })
  async getPokemonHabitat(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniquePokemonHabitatOrThrowArgs): Promise<PokemonHabitat | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonHabitats.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [PokemonHabitatGroupBy], {
    nullable: false
  })
  async groupByPokemonHabitat(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByPokemonHabitatArgs): Promise<PokemonHabitatGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonHabitats.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

}