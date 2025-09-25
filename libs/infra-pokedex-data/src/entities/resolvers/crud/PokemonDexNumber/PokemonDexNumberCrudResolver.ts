import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregatePokemonDexNumberArgs } from "./args/AggregatePokemonDexNumberArgs";
import { FindFirstPokemonDexNumberArgs } from "./args/FindFirstPokemonDexNumberArgs";
import { FindFirstPokemonDexNumberOrThrowArgs } from "./args/FindFirstPokemonDexNumberOrThrowArgs";
import { FindManyPokemonDexNumberArgs } from "./args/FindManyPokemonDexNumberArgs";
import { FindUniquePokemonDexNumberArgs } from "./args/FindUniquePokemonDexNumberArgs";
import { FindUniquePokemonDexNumberOrThrowArgs } from "./args/FindUniquePokemonDexNumberOrThrowArgs";
import { GroupByPokemonDexNumberArgs } from "./args/GroupByPokemonDexNumberArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { PokemonDexNumber } from "../../../models/PokemonDexNumber";
import { AggregatePokemonDexNumber } from "../../outputs/AggregatePokemonDexNumber";
import { PokemonDexNumberGroupBy } from "../../outputs/PokemonDexNumberGroupBy";

@TypeGraphQL.Resolver(_of => PokemonDexNumber)
export class PokemonDexNumberCrudResolver {
  @TypeGraphQL.Query(_returns => AggregatePokemonDexNumber, {
    nullable: false
  })
  async aggregatePokemonDexNumber(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregatePokemonDexNumberArgs): Promise<AggregatePokemonDexNumber> {
    return getPrismaFromContext(ctx).pokemonDexNumbers.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Query(_returns => PokemonDexNumber, {
    nullable: true
  })
  async findFirstPokemonDexNumber(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstPokemonDexNumberArgs): Promise<PokemonDexNumber | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonDexNumbers.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => PokemonDexNumber, {
    nullable: true
  })
  async findFirstPokemonDexNumberOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstPokemonDexNumberOrThrowArgs): Promise<PokemonDexNumber | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonDexNumbers.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [PokemonDexNumber], {
    nullable: false
  })
  async pokemonDexNumbers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyPokemonDexNumberArgs): Promise<PokemonDexNumber[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonDexNumbers.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => PokemonDexNumber, {
    nullable: true
  })
  async pokemonDexNumber(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniquePokemonDexNumberArgs): Promise<PokemonDexNumber | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonDexNumbers.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => PokemonDexNumber, {
    nullable: true
  })
  async getPokemonDexNumber(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniquePokemonDexNumberOrThrowArgs): Promise<PokemonDexNumber | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonDexNumbers.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [PokemonDexNumberGroupBy], {
    nullable: false
  })
  async groupByPokemonDexNumber(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByPokemonDexNumberArgs): Promise<PokemonDexNumberGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonDexNumbers.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

}