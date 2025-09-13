import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregatePokemonShapesArgs } from "./args/AggregatePokemonShapesArgs";
import { FindFirstPokemonShapesArgs } from "./args/FindFirstPokemonShapesArgs";
import { FindFirstPokemonShapesOrThrowArgs } from "./args/FindFirstPokemonShapesOrThrowArgs";
import { FindManyPokemonShapesArgs } from "./args/FindManyPokemonShapesArgs";
import { FindUniquePokemonShapesArgs } from "./args/FindUniquePokemonShapesArgs";
import { FindUniquePokemonShapesOrThrowArgs } from "./args/FindUniquePokemonShapesOrThrowArgs";
import { GroupByPokemonShapesArgs } from "./args/GroupByPokemonShapesArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { PokemonShapes } from "../../../models/PokemonShapes";
import { AggregatePokemonShapes } from "../../outputs/AggregatePokemonShapes";
import { PokemonShapesGroupBy } from "../../outputs/PokemonShapesGroupBy";

@TypeGraphQL.Resolver(_of => PokemonShapes)
export class PokemonShapesCrudResolver {
  @TypeGraphQL.Query(_returns => AggregatePokemonShapes, {
    nullable: false
  })
  async aggregatePokemonShapes(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregatePokemonShapesArgs): Promise<AggregatePokemonShapes> {
    return getPrismaFromContext(ctx).pokemonShapes.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Query(_returns => PokemonShapes, {
    nullable: true
  })
  async findFirstPokemonShapes(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstPokemonShapesArgs): Promise<PokemonShapes | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonShapes.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => PokemonShapes, {
    nullable: true
  })
  async findFirstPokemonShapesOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstPokemonShapesOrThrowArgs): Promise<PokemonShapes | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonShapes.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [PokemonShapes], {
    nullable: false
  })
  async findManyPokemonShapes(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyPokemonShapesArgs): Promise<PokemonShapes[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonShapes.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => PokemonShapes, {
    nullable: true
  })
  async findUniquePokemonShapes(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniquePokemonShapesArgs): Promise<PokemonShapes | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonShapes.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => PokemonShapes, {
    nullable: true
  })
  async findUniquePokemonShapesOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniquePokemonShapesOrThrowArgs): Promise<PokemonShapes | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonShapes.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [PokemonShapesGroupBy], {
    nullable: false
  })
  async groupByPokemonShapes(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByPokemonShapesArgs): Promise<PokemonShapesGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonShapes.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

}