import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregatePokemonFormTypeArgs } from "./args/AggregatePokemonFormTypeArgs";
import { FindFirstPokemonFormTypeArgs } from "./args/FindFirstPokemonFormTypeArgs";
import { FindFirstPokemonFormTypeOrThrowArgs } from "./args/FindFirstPokemonFormTypeOrThrowArgs";
import { FindManyPokemonFormTypeArgs } from "./args/FindManyPokemonFormTypeArgs";
import { FindUniquePokemonFormTypeArgs } from "./args/FindUniquePokemonFormTypeArgs";
import { FindUniquePokemonFormTypeOrThrowArgs } from "./args/FindUniquePokemonFormTypeOrThrowArgs";
import { GroupByPokemonFormTypeArgs } from "./args/GroupByPokemonFormTypeArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { PokemonFormType } from "../../../models/PokemonFormType";
import { AggregatePokemonFormType } from "../../outputs/AggregatePokemonFormType";
import { PokemonFormTypeGroupBy } from "../../outputs/PokemonFormTypeGroupBy";

@TypeGraphQL.Resolver(_of => PokemonFormType)
export class PokemonFormTypeCrudResolver {
  @TypeGraphQL.Query(_returns => AggregatePokemonFormType, {
    nullable: false
  })
  async aggregatePokemonFormType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregatePokemonFormTypeArgs): Promise<AggregatePokemonFormType> {
    return getPrismaFromContext(ctx).pokemonFormTypes.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Query(_returns => PokemonFormType, {
    nullable: true
  })
  async findFirstPokemonFormType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstPokemonFormTypeArgs): Promise<PokemonFormType | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonFormTypes.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => PokemonFormType, {
    nullable: true
  })
  async findFirstPokemonFormTypeOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstPokemonFormTypeOrThrowArgs): Promise<PokemonFormType | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonFormTypes.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [PokemonFormType], {
    nullable: false
  })
  async pokemonFormTypes(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyPokemonFormTypeArgs): Promise<PokemonFormType[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonFormTypes.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => PokemonFormType, {
    nullable: true
  })
  async pokemonFormType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniquePokemonFormTypeArgs): Promise<PokemonFormType | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonFormTypes.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => PokemonFormType, {
    nullable: true
  })
  async getPokemonFormType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniquePokemonFormTypeOrThrowArgs): Promise<PokemonFormType | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonFormTypes.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [PokemonFormTypeGroupBy], {
    nullable: false
  })
  async groupByPokemonFormType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByPokemonFormTypeArgs): Promise<PokemonFormTypeGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonFormTypes.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

}