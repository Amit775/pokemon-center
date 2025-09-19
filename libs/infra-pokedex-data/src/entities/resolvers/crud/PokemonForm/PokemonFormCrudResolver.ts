import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregatePokemonFormArgs } from "./args/AggregatePokemonFormArgs";
import { CreateManyAndReturnPokemonFormArgs } from "./args/CreateManyAndReturnPokemonFormArgs";
import { CreateManyPokemonFormArgs } from "./args/CreateManyPokemonFormArgs";
import { CreateOnePokemonFormArgs } from "./args/CreateOnePokemonFormArgs";
import { DeleteManyPokemonFormArgs } from "./args/DeleteManyPokemonFormArgs";
import { DeleteOnePokemonFormArgs } from "./args/DeleteOnePokemonFormArgs";
import { FindFirstPokemonFormArgs } from "./args/FindFirstPokemonFormArgs";
import { FindFirstPokemonFormOrThrowArgs } from "./args/FindFirstPokemonFormOrThrowArgs";
import { FindManyPokemonFormArgs } from "./args/FindManyPokemonFormArgs";
import { FindUniquePokemonFormArgs } from "./args/FindUniquePokemonFormArgs";
import { FindUniquePokemonFormOrThrowArgs } from "./args/FindUniquePokemonFormOrThrowArgs";
import { GroupByPokemonFormArgs } from "./args/GroupByPokemonFormArgs";
import { UpdateManyPokemonFormArgs } from "./args/UpdateManyPokemonFormArgs";
import { UpdateOnePokemonFormArgs } from "./args/UpdateOnePokemonFormArgs";
import { UpsertOnePokemonFormArgs } from "./args/UpsertOnePokemonFormArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { PokemonForm } from "../../../models/PokemonForm";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregatePokemonForm } from "../../outputs/AggregatePokemonForm";
import { CreateManyAndReturnPokemonForm } from "../../outputs/CreateManyAndReturnPokemonForm";
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

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyPokemonForm(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyPokemonFormArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonForms.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnPokemonForm], {
    nullable: false
  })
  async createManyAndReturnPokemonForm(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnPokemonFormArgs): Promise<CreateManyAndReturnPokemonForm[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonForms.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => PokemonForm, {
    nullable: false
  })
  async createOnePokemonForm(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOnePokemonFormArgs): Promise<PokemonForm> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonForms.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyPokemonForm(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyPokemonFormArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonForms.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => PokemonForm, {
    nullable: true
  })
  async deleteOnePokemonForm(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOnePokemonFormArgs): Promise<PokemonForm | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonForms.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
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

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyPokemonForm(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyPokemonFormArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonForms.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => PokemonForm, {
    nullable: true
  })
  async updateOnePokemonForm(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOnePokemonFormArgs): Promise<PokemonForm | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonForms.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => PokemonForm, {
    nullable: false
  })
  async upsertOnePokemonForm(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOnePokemonFormArgs): Promise<PokemonForm> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonForms.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
