import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregatePokemonGameIndicesArgs } from "./args/AggregatePokemonGameIndicesArgs";
import { FindFirstPokemonGameIndicesArgs } from "./args/FindFirstPokemonGameIndicesArgs";
import { FindFirstPokemonGameIndicesOrThrowArgs } from "./args/FindFirstPokemonGameIndicesOrThrowArgs";
import { FindManyPokemonGameIndicesArgs } from "./args/FindManyPokemonGameIndicesArgs";
import { FindUniquePokemonGameIndicesArgs } from "./args/FindUniquePokemonGameIndicesArgs";
import { FindUniquePokemonGameIndicesOrThrowArgs } from "./args/FindUniquePokemonGameIndicesOrThrowArgs";
import { GroupByPokemonGameIndicesArgs } from "./args/GroupByPokemonGameIndicesArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { PokemonGameIndices } from "../../../models/PokemonGameIndices";
import { AggregatePokemonGameIndices } from "../../outputs/AggregatePokemonGameIndices";
import { PokemonGameIndicesGroupBy } from "../../outputs/PokemonGameIndicesGroupBy";

@TypeGraphQL.Resolver(_of => PokemonGameIndices)
export class PokemonGameIndicesCrudResolver {
  @TypeGraphQL.Query(_returns => AggregatePokemonGameIndices, {
    nullable: false
  })
  async aggregatePokemonGameIndices(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregatePokemonGameIndicesArgs): Promise<AggregatePokemonGameIndices> {
    return getPrismaFromContext(ctx).pokemonGameIndices.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Query(_returns => PokemonGameIndices, {
    nullable: true
  })
  async findFirstPokemonGameIndices(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstPokemonGameIndicesArgs): Promise<PokemonGameIndices | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonGameIndices.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => PokemonGameIndices, {
    nullable: true
  })
  async findFirstPokemonGameIndicesOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstPokemonGameIndicesOrThrowArgs): Promise<PokemonGameIndices | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonGameIndices.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [PokemonGameIndices], {
    nullable: false
  })
  async findManyPokemonGameIndices(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyPokemonGameIndicesArgs): Promise<PokemonGameIndices[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonGameIndices.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => PokemonGameIndices, {
    nullable: true
  })
  async findUniquePokemonGameIndices(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniquePokemonGameIndicesArgs): Promise<PokemonGameIndices | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonGameIndices.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => PokemonGameIndices, {
    nullable: true
  })
  async findUniquePokemonGameIndicesOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniquePokemonGameIndicesOrThrowArgs): Promise<PokemonGameIndices | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonGameIndices.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [PokemonGameIndicesGroupBy], {
    nullable: false
  })
  async groupByPokemonGameIndices(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByPokemonGameIndicesArgs): Promise<PokemonGameIndicesGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonGameIndices.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

}