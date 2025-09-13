import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregatePokemonTypesArgs } from "./args/AggregatePokemonTypesArgs";
import { FindFirstPokemonTypesArgs } from "./args/FindFirstPokemonTypesArgs";
import { FindFirstPokemonTypesOrThrowArgs } from "./args/FindFirstPokemonTypesOrThrowArgs";
import { FindManyPokemonTypesArgs } from "./args/FindManyPokemonTypesArgs";
import { FindUniquePokemonTypesArgs } from "./args/FindUniquePokemonTypesArgs";
import { FindUniquePokemonTypesOrThrowArgs } from "./args/FindUniquePokemonTypesOrThrowArgs";
import { GroupByPokemonTypesArgs } from "./args/GroupByPokemonTypesArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { PokemonTypes } from "../../../models/PokemonTypes";
import { AggregatePokemonTypes } from "../../outputs/AggregatePokemonTypes";
import { PokemonTypesGroupBy } from "../../outputs/PokemonTypesGroupBy";

@TypeGraphQL.Resolver(_of => PokemonTypes)
export class PokemonTypesCrudResolver {
  @TypeGraphQL.Query(_returns => AggregatePokemonTypes, {
    nullable: false
  })
  async aggregatePokemonTypes(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregatePokemonTypesArgs): Promise<AggregatePokemonTypes> {
    return getPrismaFromContext(ctx).pokemonTypes.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Query(_returns => PokemonTypes, {
    nullable: true
  })
  async findFirstPokemonTypes(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstPokemonTypesArgs): Promise<PokemonTypes | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonTypes.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => PokemonTypes, {
    nullable: true
  })
  async findFirstPokemonTypesOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstPokemonTypesOrThrowArgs): Promise<PokemonTypes | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonTypes.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [PokemonTypes], {
    nullable: false
  })
  async findManyPokemonTypes(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyPokemonTypesArgs): Promise<PokemonTypes[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonTypes.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => PokemonTypes, {
    nullable: true
  })
  async findUniquePokemonTypes(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniquePokemonTypesArgs): Promise<PokemonTypes | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonTypes.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => PokemonTypes, {
    nullable: true
  })
  async findUniquePokemonTypesOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniquePokemonTypesOrThrowArgs): Promise<PokemonTypes | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonTypes.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [PokemonTypesGroupBy], {
    nullable: false
  })
  async groupByPokemonTypes(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByPokemonTypesArgs): Promise<PokemonTypesGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonTypes.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

}