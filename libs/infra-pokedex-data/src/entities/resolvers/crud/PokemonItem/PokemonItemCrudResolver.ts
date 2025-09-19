import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregatePokemonItemArgs } from "./args/AggregatePokemonItemArgs";
import { CreateManyAndReturnPokemonItemArgs } from "./args/CreateManyAndReturnPokemonItemArgs";
import { CreateManyPokemonItemArgs } from "./args/CreateManyPokemonItemArgs";
import { CreateOnePokemonItemArgs } from "./args/CreateOnePokemonItemArgs";
import { DeleteManyPokemonItemArgs } from "./args/DeleteManyPokemonItemArgs";
import { DeleteOnePokemonItemArgs } from "./args/DeleteOnePokemonItemArgs";
import { FindFirstPokemonItemArgs } from "./args/FindFirstPokemonItemArgs";
import { FindFirstPokemonItemOrThrowArgs } from "./args/FindFirstPokemonItemOrThrowArgs";
import { FindManyPokemonItemArgs } from "./args/FindManyPokemonItemArgs";
import { FindUniquePokemonItemArgs } from "./args/FindUniquePokemonItemArgs";
import { FindUniquePokemonItemOrThrowArgs } from "./args/FindUniquePokemonItemOrThrowArgs";
import { GroupByPokemonItemArgs } from "./args/GroupByPokemonItemArgs";
import { UpdateManyPokemonItemArgs } from "./args/UpdateManyPokemonItemArgs";
import { UpdateOnePokemonItemArgs } from "./args/UpdateOnePokemonItemArgs";
import { UpsertOnePokemonItemArgs } from "./args/UpsertOnePokemonItemArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { PokemonItem } from "../../../models/PokemonItem";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregatePokemonItem } from "../../outputs/AggregatePokemonItem";
import { CreateManyAndReturnPokemonItem } from "../../outputs/CreateManyAndReturnPokemonItem";
import { PokemonItemGroupBy } from "../../outputs/PokemonItemGroupBy";

@TypeGraphQL.Resolver(_of => PokemonItem)
export class PokemonItemCrudResolver {
  @TypeGraphQL.Query(_returns => AggregatePokemonItem, {
    nullable: false
  })
  async aggregatePokemonItem(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregatePokemonItemArgs): Promise<AggregatePokemonItem> {
    return getPrismaFromContext(ctx).pokemonItems.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyPokemonItem(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyPokemonItemArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonItems.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnPokemonItem], {
    nullable: false
  })
  async createManyAndReturnPokemonItem(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnPokemonItemArgs): Promise<CreateManyAndReturnPokemonItem[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonItems.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => PokemonItem, {
    nullable: false
  })
  async createOnePokemonItem(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOnePokemonItemArgs): Promise<PokemonItem> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonItems.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyPokemonItem(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyPokemonItemArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonItems.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => PokemonItem, {
    nullable: true
  })
  async deleteOnePokemonItem(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOnePokemonItemArgs): Promise<PokemonItem | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonItems.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => PokemonItem, {
    nullable: true
  })
  async findFirstPokemonItem(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstPokemonItemArgs): Promise<PokemonItem | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonItems.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => PokemonItem, {
    nullable: true
  })
  async findFirstPokemonItemOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstPokemonItemOrThrowArgs): Promise<PokemonItem | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonItems.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [PokemonItem], {
    nullable: false
  })
  async pokemonItems(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyPokemonItemArgs): Promise<PokemonItem[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonItems.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => PokemonItem, {
    nullable: true
  })
  async pokemonItem(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniquePokemonItemArgs): Promise<PokemonItem | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonItems.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => PokemonItem, {
    nullable: true
  })
  async getPokemonItem(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniquePokemonItemOrThrowArgs): Promise<PokemonItem | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonItems.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [PokemonItemGroupBy], {
    nullable: false
  })
  async groupByPokemonItem(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByPokemonItemArgs): Promise<PokemonItemGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonItems.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyPokemonItem(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyPokemonItemArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonItems.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => PokemonItem, {
    nullable: true
  })
  async updateOnePokemonItem(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOnePokemonItemArgs): Promise<PokemonItem | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonItems.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => PokemonItem, {
    nullable: false
  })
  async upsertOnePokemonItem(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOnePokemonItemArgs): Promise<PokemonItem> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonItems.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
