import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregatePokemonSpeciesArgs } from "./args/AggregatePokemonSpeciesArgs";
import { CreateManyAndReturnPokemonSpeciesArgs } from "./args/CreateManyAndReturnPokemonSpeciesArgs";
import { CreateManyPokemonSpeciesArgs } from "./args/CreateManyPokemonSpeciesArgs";
import { CreateOnePokemonSpeciesArgs } from "./args/CreateOnePokemonSpeciesArgs";
import { DeleteManyPokemonSpeciesArgs } from "./args/DeleteManyPokemonSpeciesArgs";
import { DeleteOnePokemonSpeciesArgs } from "./args/DeleteOnePokemonSpeciesArgs";
import { FindFirstPokemonSpeciesArgs } from "./args/FindFirstPokemonSpeciesArgs";
import { FindFirstPokemonSpeciesOrThrowArgs } from "./args/FindFirstPokemonSpeciesOrThrowArgs";
import { FindManyPokemonSpeciesArgs } from "./args/FindManyPokemonSpeciesArgs";
import { FindUniquePokemonSpeciesArgs } from "./args/FindUniquePokemonSpeciesArgs";
import { FindUniquePokemonSpeciesOrThrowArgs } from "./args/FindUniquePokemonSpeciesOrThrowArgs";
import { GroupByPokemonSpeciesArgs } from "./args/GroupByPokemonSpeciesArgs";
import { UpdateManyPokemonSpeciesArgs } from "./args/UpdateManyPokemonSpeciesArgs";
import { UpdateOnePokemonSpeciesArgs } from "./args/UpdateOnePokemonSpeciesArgs";
import { UpsertOnePokemonSpeciesArgs } from "./args/UpsertOnePokemonSpeciesArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { PokemonSpecies } from "../../../models/PokemonSpecies";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregatePokemonSpecies } from "../../outputs/AggregatePokemonSpecies";
import { CreateManyAndReturnPokemonSpecies } from "../../outputs/CreateManyAndReturnPokemonSpecies";
import { PokemonSpeciesGroupBy } from "../../outputs/PokemonSpeciesGroupBy";

@TypeGraphQL.Resolver(_of => PokemonSpecies)
export class PokemonSpeciesCrudResolver {
  @TypeGraphQL.Query(_returns => AggregatePokemonSpecies, {
    nullable: false
  })
  async aggregatePokemonSpecies(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregatePokemonSpeciesArgs): Promise<AggregatePokemonSpecies> {
    return getPrismaFromContext(ctx).pokemonSpecies.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyPokemonSpecies(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyPokemonSpeciesArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonSpecies.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnPokemonSpecies], {
    nullable: false
  })
  async createManyAndReturnPokemonSpecies(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnPokemonSpeciesArgs): Promise<CreateManyAndReturnPokemonSpecies[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonSpecies.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => PokemonSpecies, {
    nullable: false
  })
  async createOnePokemonSpecies(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOnePokemonSpeciesArgs): Promise<PokemonSpecies> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonSpecies.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyPokemonSpecies(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyPokemonSpeciesArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonSpecies.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => PokemonSpecies, {
    nullable: true
  })
  async deleteOnePokemonSpecies(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOnePokemonSpeciesArgs): Promise<PokemonSpecies | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonSpecies.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => PokemonSpecies, {
    nullable: true
  })
  async findFirstPokemonSpecies(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstPokemonSpeciesArgs): Promise<PokemonSpecies | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonSpecies.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => PokemonSpecies, {
    nullable: true
  })
  async findFirstPokemonSpeciesOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstPokemonSpeciesOrThrowArgs): Promise<PokemonSpecies | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonSpecies.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [PokemonSpecies], {
    nullable: false
  })
  async findManyPokemonSpecies(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyPokemonSpeciesArgs): Promise<PokemonSpecies[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonSpecies.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => PokemonSpecies, {
    nullable: true
  })
  async findUniquePokemonSpecies(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniquePokemonSpeciesArgs): Promise<PokemonSpecies | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonSpecies.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => PokemonSpecies, {
    nullable: true
  })
  async findUniquePokemonSpeciesOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniquePokemonSpeciesOrThrowArgs): Promise<PokemonSpecies | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonSpecies.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [PokemonSpeciesGroupBy], {
    nullable: false
  })
  async groupByPokemonSpecies(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByPokemonSpeciesArgs): Promise<PokemonSpeciesGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonSpecies.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyPokemonSpecies(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyPokemonSpeciesArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonSpecies.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => PokemonSpecies, {
    nullable: true
  })
  async updateOnePokemonSpecies(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOnePokemonSpeciesArgs): Promise<PokemonSpecies | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonSpecies.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => PokemonSpecies, {
    nullable: false
  })
  async upsertOnePokemonSpecies(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOnePokemonSpeciesArgs): Promise<PokemonSpecies> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonSpecies.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
