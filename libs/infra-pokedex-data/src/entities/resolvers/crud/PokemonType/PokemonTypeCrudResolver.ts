import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregatePokemonTypeArgs } from "./args/AggregatePokemonTypeArgs";
import { FindFirstPokemonTypeArgs } from "./args/FindFirstPokemonTypeArgs";
import { FindFirstPokemonTypeOrThrowArgs } from "./args/FindFirstPokemonTypeOrThrowArgs";
import { FindManyPokemonTypeArgs } from "./args/FindManyPokemonTypeArgs";
import { FindUniquePokemonTypeArgs } from "./args/FindUniquePokemonTypeArgs";
import { FindUniquePokemonTypeOrThrowArgs } from "./args/FindUniquePokemonTypeOrThrowArgs";
import { GroupByPokemonTypeArgs } from "./args/GroupByPokemonTypeArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { PokemonType } from "../../../models/PokemonType";
import { AggregatePokemonType } from "../../outputs/AggregatePokemonType";
import { PokemonTypeGroupBy } from "../../outputs/PokemonTypeGroupBy";

@TypeGraphQL.Resolver(_of => PokemonType)
export class PokemonTypeCrudResolver {
  @TypeGraphQL.Query(_returns => AggregatePokemonType, {
    nullable: false
  })
  async aggregatePokemonType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregatePokemonTypeArgs): Promise<AggregatePokemonType> {
    return getPrismaFromContext(ctx).pokemonTypes.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Query(_returns => PokemonType, {
    nullable: true
  })
  async findFirstPokemonType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstPokemonTypeArgs): Promise<PokemonType | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonTypes.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => PokemonType, {
    nullable: true
  })
  async findFirstPokemonTypeOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstPokemonTypeOrThrowArgs): Promise<PokemonType | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonTypes.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [PokemonType], {
    nullable: false
  })
  async pokemonTypes(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyPokemonTypeArgs): Promise<PokemonType[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonTypes.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => PokemonType, {
    nullable: true
  })
  async pokemonType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniquePokemonTypeArgs): Promise<PokemonType | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonTypes.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => PokemonType, {
    nullable: true
  })
  async getPokemonType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniquePokemonTypeOrThrowArgs): Promise<PokemonType | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonTypes.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [PokemonTypeGroupBy], {
    nullable: false
  })
  async groupByPokemonType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByPokemonTypeArgs): Promise<PokemonTypeGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonTypes.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

}