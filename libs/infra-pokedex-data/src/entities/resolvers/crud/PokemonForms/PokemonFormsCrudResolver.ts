import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregatePokemonFormsArgs } from "./args/AggregatePokemonFormsArgs";
import { FindFirstPokemonFormsArgs } from "./args/FindFirstPokemonFormsArgs";
import { FindFirstPokemonFormsOrThrowArgs } from "./args/FindFirstPokemonFormsOrThrowArgs";
import { FindManyPokemonFormsArgs } from "./args/FindManyPokemonFormsArgs";
import { FindUniquePokemonFormsArgs } from "./args/FindUniquePokemonFormsArgs";
import { FindUniquePokemonFormsOrThrowArgs } from "./args/FindUniquePokemonFormsOrThrowArgs";
import { GroupByPokemonFormsArgs } from "./args/GroupByPokemonFormsArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { PokemonForms } from "../../../models/PokemonForms";
import { AggregatePokemonForms } from "../../outputs/AggregatePokemonForms";
import { PokemonFormsGroupBy } from "../../outputs/PokemonFormsGroupBy";

@TypeGraphQL.Resolver(_of => PokemonForms)
export class PokemonFormsCrudResolver {
  @TypeGraphQL.Query(_returns => AggregatePokemonForms, {
    nullable: false
  })
  async aggregatePokemonForms(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregatePokemonFormsArgs): Promise<AggregatePokemonForms> {
    return getPrismaFromContext(ctx).pokemonForms.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Query(_returns => PokemonForms, {
    nullable: true
  })
  async findFirstPokemonForms(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstPokemonFormsArgs): Promise<PokemonForms | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonForms.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => PokemonForms, {
    nullable: true
  })
  async findFirstPokemonFormsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstPokemonFormsOrThrowArgs): Promise<PokemonForms | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonForms.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [PokemonForms], {
    nullable: false
  })
  async findManyPokemonForms(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyPokemonFormsArgs): Promise<PokemonForms[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonForms.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => PokemonForms, {
    nullable: true
  })
  async findUniquePokemonForms(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniquePokemonFormsArgs): Promise<PokemonForms | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonForms.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => PokemonForms, {
    nullable: true
  })
  async findUniquePokemonFormsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniquePokemonFormsOrThrowArgs): Promise<PokemonForms | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonForms.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [PokemonFormsGroupBy], {
    nullable: false
  })
  async groupByPokemonForms(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByPokemonFormsArgs): Promise<PokemonFormsGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonForms.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

}