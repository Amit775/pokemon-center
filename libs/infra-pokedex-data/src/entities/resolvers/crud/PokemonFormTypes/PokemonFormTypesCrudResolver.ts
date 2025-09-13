import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregatePokemonFormTypesArgs } from "./args/AggregatePokemonFormTypesArgs";
import { FindFirstPokemonFormTypesArgs } from "./args/FindFirstPokemonFormTypesArgs";
import { FindFirstPokemonFormTypesOrThrowArgs } from "./args/FindFirstPokemonFormTypesOrThrowArgs";
import { FindManyPokemonFormTypesArgs } from "./args/FindManyPokemonFormTypesArgs";
import { FindUniquePokemonFormTypesArgs } from "./args/FindUniquePokemonFormTypesArgs";
import { FindUniquePokemonFormTypesOrThrowArgs } from "./args/FindUniquePokemonFormTypesOrThrowArgs";
import { GroupByPokemonFormTypesArgs } from "./args/GroupByPokemonFormTypesArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { PokemonFormTypes } from "../../../models/PokemonFormTypes";
import { AggregatePokemonFormTypes } from "../../outputs/AggregatePokemonFormTypes";
import { PokemonFormTypesGroupBy } from "../../outputs/PokemonFormTypesGroupBy";

@TypeGraphQL.Resolver(_of => PokemonFormTypes)
export class PokemonFormTypesCrudResolver {
  @TypeGraphQL.Query(_returns => AggregatePokemonFormTypes, {
    nullable: false
  })
  async aggregatePokemonFormTypes(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregatePokemonFormTypesArgs): Promise<AggregatePokemonFormTypes> {
    return getPrismaFromContext(ctx).pokemonFormTypes.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Query(_returns => PokemonFormTypes, {
    nullable: true
  })
  async findFirstPokemonFormTypes(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstPokemonFormTypesArgs): Promise<PokemonFormTypes | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonFormTypes.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => PokemonFormTypes, {
    nullable: true
  })
  async findFirstPokemonFormTypesOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstPokemonFormTypesOrThrowArgs): Promise<PokemonFormTypes | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonFormTypes.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [PokemonFormTypes], {
    nullable: false
  })
  async findManyPokemonFormTypes(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyPokemonFormTypesArgs): Promise<PokemonFormTypes[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonFormTypes.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => PokemonFormTypes, {
    nullable: true
  })
  async findUniquePokemonFormTypes(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniquePokemonFormTypesArgs): Promise<PokemonFormTypes | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonFormTypes.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => PokemonFormTypes, {
    nullable: true
  })
  async findUniquePokemonFormTypesOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniquePokemonFormTypesOrThrowArgs): Promise<PokemonFormTypes | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonFormTypes.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [PokemonFormTypesGroupBy], {
    nullable: false
  })
  async groupByPokemonFormTypes(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByPokemonFormTypesArgs): Promise<PokemonFormTypesGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonFormTypes.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

}