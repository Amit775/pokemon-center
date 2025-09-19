import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregatePokemonDexNumberArgs } from "./args/AggregatePokemonDexNumberArgs";
import { CreateManyAndReturnPokemonDexNumberArgs } from "./args/CreateManyAndReturnPokemonDexNumberArgs";
import { CreateManyPokemonDexNumberArgs } from "./args/CreateManyPokemonDexNumberArgs";
import { CreateOnePokemonDexNumberArgs } from "./args/CreateOnePokemonDexNumberArgs";
import { DeleteManyPokemonDexNumberArgs } from "./args/DeleteManyPokemonDexNumberArgs";
import { DeleteOnePokemonDexNumberArgs } from "./args/DeleteOnePokemonDexNumberArgs";
import { FindFirstPokemonDexNumberArgs } from "./args/FindFirstPokemonDexNumberArgs";
import { FindFirstPokemonDexNumberOrThrowArgs } from "./args/FindFirstPokemonDexNumberOrThrowArgs";
import { FindManyPokemonDexNumberArgs } from "./args/FindManyPokemonDexNumberArgs";
import { FindUniquePokemonDexNumberArgs } from "./args/FindUniquePokemonDexNumberArgs";
import { FindUniquePokemonDexNumberOrThrowArgs } from "./args/FindUniquePokemonDexNumberOrThrowArgs";
import { GroupByPokemonDexNumberArgs } from "./args/GroupByPokemonDexNumberArgs";
import { UpdateManyPokemonDexNumberArgs } from "./args/UpdateManyPokemonDexNumberArgs";
import { UpdateOnePokemonDexNumberArgs } from "./args/UpdateOnePokemonDexNumberArgs";
import { UpsertOnePokemonDexNumberArgs } from "./args/UpsertOnePokemonDexNumberArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { PokemonDexNumber } from "../../../models/PokemonDexNumber";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregatePokemonDexNumber } from "../../outputs/AggregatePokemonDexNumber";
import { CreateManyAndReturnPokemonDexNumber } from "../../outputs/CreateManyAndReturnPokemonDexNumber";
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

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyPokemonDexNumber(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyPokemonDexNumberArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonDexNumbers.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnPokemonDexNumber], {
    nullable: false
  })
  async createManyAndReturnPokemonDexNumber(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnPokemonDexNumberArgs): Promise<CreateManyAndReturnPokemonDexNumber[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonDexNumbers.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => PokemonDexNumber, {
    nullable: false
  })
  async createOnePokemonDexNumber(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOnePokemonDexNumberArgs): Promise<PokemonDexNumber> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonDexNumbers.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyPokemonDexNumber(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyPokemonDexNumberArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonDexNumbers.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => PokemonDexNumber, {
    nullable: true
  })
  async deleteOnePokemonDexNumber(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOnePokemonDexNumberArgs): Promise<PokemonDexNumber | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonDexNumbers.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
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

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyPokemonDexNumber(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyPokemonDexNumberArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonDexNumbers.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => PokemonDexNumber, {
    nullable: true
  })
  async updateOnePokemonDexNumber(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOnePokemonDexNumberArgs): Promise<PokemonDexNumber | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonDexNumbers.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => PokemonDexNumber, {
    nullable: false
  })
  async upsertOnePokemonDexNumber(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOnePokemonDexNumberArgs): Promise<PokemonDexNumber> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonDexNumbers.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
