import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregatePokemonFormArgs } from "./args/AggregatePokemonFormArgs";
import { FindFirstPokemonFormArgs } from "./args/FindFirstPokemonFormArgs";
import { FindFirstPokemonFormOrThrowArgs } from "./args/FindFirstPokemonFormOrThrowArgs";
import { FindManyPokemonFormArgs } from "./args/FindManyPokemonFormArgs";
import { FindUniquePokemonFormArgs } from "./args/FindUniquePokemonFormArgs";
import { FindUniquePokemonFormOrThrowArgs } from "./args/FindUniquePokemonFormOrThrowArgs";
import { GroupByPokemonFormArgs } from "./args/GroupByPokemonFormArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { PokemonForm } from "../../../models/PokemonForm";
import { AggregatePokemonForm } from "../../outputs/AggregatePokemonForm";
import { PokemonFormGroupBy } from "../../outputs/PokemonFormGroupBy";

@TypeGraphQL.Resolver(_of => PokemonForm)
export class PokemonFormCrudResolver {
  @TypeGraphQL.Query(_returns => AggregatePokemonForm, {
    nullable: false
  })
  async aggregatePokemonForm(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregatePokemonFormArgs): Promise<AggregatePokemonForm> {
    return getPrismaFromContext(ctx).pokemonForms.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Query(_returns => PokemonForm, {
    nullable: true
  })
  async findFirstPokemonForm(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstPokemonFormArgs): Promise<PokemonForm | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonForms.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => PokemonForm, {
    nullable: true
  })
  async findFirstPokemonFormOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstPokemonFormOrThrowArgs): Promise<PokemonForm | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonForms.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [PokemonForm], {
    nullable: false
  })
  async pokemonForms(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyPokemonFormArgs): Promise<PokemonForm[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonForms.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => PokemonForm, {
    nullable: true
  })
  async pokemonForm(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniquePokemonFormArgs): Promise<PokemonForm | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonForms.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => PokemonForm, {
    nullable: true
  })
  async getPokemonForm(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniquePokemonFormOrThrowArgs): Promise<PokemonForm | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonForms.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [PokemonFormGroupBy], {
    nullable: false
  })
  async groupByPokemonForm(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByPokemonFormArgs): Promise<PokemonFormGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonForms.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

}