import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregatePokemonEggGroupArgs } from "./args/AggregatePokemonEggGroupArgs";
import { CreateManyAndReturnPokemonEggGroupArgs } from "./args/CreateManyAndReturnPokemonEggGroupArgs";
import { CreateManyPokemonEggGroupArgs } from "./args/CreateManyPokemonEggGroupArgs";
import { CreateOnePokemonEggGroupArgs } from "./args/CreateOnePokemonEggGroupArgs";
import { DeleteManyPokemonEggGroupArgs } from "./args/DeleteManyPokemonEggGroupArgs";
import { DeleteOnePokemonEggGroupArgs } from "./args/DeleteOnePokemonEggGroupArgs";
import { FindFirstPokemonEggGroupArgs } from "./args/FindFirstPokemonEggGroupArgs";
import { FindFirstPokemonEggGroupOrThrowArgs } from "./args/FindFirstPokemonEggGroupOrThrowArgs";
import { FindManyPokemonEggGroupArgs } from "./args/FindManyPokemonEggGroupArgs";
import { FindUniquePokemonEggGroupArgs } from "./args/FindUniquePokemonEggGroupArgs";
import { FindUniquePokemonEggGroupOrThrowArgs } from "./args/FindUniquePokemonEggGroupOrThrowArgs";
import { GroupByPokemonEggGroupArgs } from "./args/GroupByPokemonEggGroupArgs";
import { UpdateManyPokemonEggGroupArgs } from "./args/UpdateManyPokemonEggGroupArgs";
import { UpdateOnePokemonEggGroupArgs } from "./args/UpdateOnePokemonEggGroupArgs";
import { UpsertOnePokemonEggGroupArgs } from "./args/UpsertOnePokemonEggGroupArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { PokemonEggGroup } from "../../../models/PokemonEggGroup";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregatePokemonEggGroup } from "../../outputs/AggregatePokemonEggGroup";
import { CreateManyAndReturnPokemonEggGroup } from "../../outputs/CreateManyAndReturnPokemonEggGroup";
import { PokemonEggGroupGroupBy } from "../../outputs/PokemonEggGroupGroupBy";

@TypeGraphQL.Resolver(_of => PokemonEggGroup)
export class PokemonEggGroupCrudResolver {
  @TypeGraphQL.Query(_returns => AggregatePokemonEggGroup, {
    nullable: false
  })
  async aggregatePokemonEggGroup(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregatePokemonEggGroupArgs): Promise<AggregatePokemonEggGroup> {
    return getPrismaFromContext(ctx).pokemonEggGroups.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyPokemonEggGroup(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyPokemonEggGroupArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonEggGroups.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnPokemonEggGroup], {
    nullable: false
  })
  async createManyAndReturnPokemonEggGroup(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnPokemonEggGroupArgs): Promise<CreateManyAndReturnPokemonEggGroup[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonEggGroups.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => PokemonEggGroup, {
    nullable: false
  })
  async createOnePokemonEggGroup(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOnePokemonEggGroupArgs): Promise<PokemonEggGroup> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonEggGroups.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyPokemonEggGroup(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyPokemonEggGroupArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonEggGroups.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => PokemonEggGroup, {
    nullable: true
  })
  async deleteOnePokemonEggGroup(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOnePokemonEggGroupArgs): Promise<PokemonEggGroup | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonEggGroups.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => PokemonEggGroup, {
    nullable: true
  })
  async findFirstPokemonEggGroup(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstPokemonEggGroupArgs): Promise<PokemonEggGroup | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonEggGroups.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => PokemonEggGroup, {
    nullable: true
  })
  async findFirstPokemonEggGroupOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstPokemonEggGroupOrThrowArgs): Promise<PokemonEggGroup | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonEggGroups.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [PokemonEggGroup], {
    nullable: false
  })
  async pokemonEggGroups(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyPokemonEggGroupArgs): Promise<PokemonEggGroup[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonEggGroups.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => PokemonEggGroup, {
    nullable: true
  })
  async pokemonEggGroup(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniquePokemonEggGroupArgs): Promise<PokemonEggGroup | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonEggGroups.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => PokemonEggGroup, {
    nullable: true
  })
  async getPokemonEggGroup(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniquePokemonEggGroupOrThrowArgs): Promise<PokemonEggGroup | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonEggGroups.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [PokemonEggGroupGroupBy], {
    nullable: false
  })
  async groupByPokemonEggGroup(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByPokemonEggGroupArgs): Promise<PokemonEggGroupGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonEggGroups.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyPokemonEggGroup(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyPokemonEggGroupArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonEggGroups.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => PokemonEggGroup, {
    nullable: true
  })
  async updateOnePokemonEggGroup(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOnePokemonEggGroupArgs): Promise<PokemonEggGroup | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonEggGroups.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => PokemonEggGroup, {
    nullable: false
  })
  async upsertOnePokemonEggGroup(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOnePokemonEggGroupArgs): Promise<PokemonEggGroup> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonEggGroups.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
