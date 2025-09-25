import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregatePokemonShapeArgs } from "./args/AggregatePokemonShapeArgs";
import { FindFirstPokemonShapeArgs } from "./args/FindFirstPokemonShapeArgs";
import { FindFirstPokemonShapeOrThrowArgs } from "./args/FindFirstPokemonShapeOrThrowArgs";
import { FindManyPokemonShapeArgs } from "./args/FindManyPokemonShapeArgs";
import { FindUniquePokemonShapeArgs } from "./args/FindUniquePokemonShapeArgs";
import { FindUniquePokemonShapeOrThrowArgs } from "./args/FindUniquePokemonShapeOrThrowArgs";
import { GroupByPokemonShapeArgs } from "./args/GroupByPokemonShapeArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { PokemonShape } from "../../../models/PokemonShape";
import { AggregatePokemonShape } from "../../outputs/AggregatePokemonShape";
import { PokemonShapeGroupBy } from "../../outputs/PokemonShapeGroupBy";

@TypeGraphQL.Resolver(_of => PokemonShape)
export class PokemonShapeCrudResolver {
  @TypeGraphQL.Query(_returns => AggregatePokemonShape, {
    nullable: false
  })
  async aggregatePokemonShape(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregatePokemonShapeArgs): Promise<AggregatePokemonShape> {
    return getPrismaFromContext(ctx).pokemonShapes.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Query(_returns => PokemonShape, {
    nullable: true
  })
  async findFirstPokemonShape(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstPokemonShapeArgs): Promise<PokemonShape | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonShapes.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => PokemonShape, {
    nullable: true
  })
  async findFirstPokemonShapeOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstPokemonShapeOrThrowArgs): Promise<PokemonShape | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonShapes.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [PokemonShape], {
    nullable: false
  })
  async pokemonShapes(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyPokemonShapeArgs): Promise<PokemonShape[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonShapes.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => PokemonShape, {
    nullable: true
  })
  async pokemonShape(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniquePokemonShapeArgs): Promise<PokemonShape | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonShapes.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => PokemonShape, {
    nullable: true
  })
  async getPokemonShape(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniquePokemonShapeOrThrowArgs): Promise<PokemonShape | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonShapes.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [PokemonShapeGroupBy], {
    nullable: false
  })
  async groupByPokemonShape(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByPokemonShapeArgs): Promise<PokemonShapeGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonShapes.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

}