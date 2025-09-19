import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateNatureBattleStylePreferenceArgs } from "./args/AggregateNatureBattleStylePreferenceArgs";
import { CreateManyAndReturnNatureBattleStylePreferenceArgs } from "./args/CreateManyAndReturnNatureBattleStylePreferenceArgs";
import { CreateManyNatureBattleStylePreferenceArgs } from "./args/CreateManyNatureBattleStylePreferenceArgs";
import { CreateOneNatureBattleStylePreferenceArgs } from "./args/CreateOneNatureBattleStylePreferenceArgs";
import { DeleteManyNatureBattleStylePreferenceArgs } from "./args/DeleteManyNatureBattleStylePreferenceArgs";
import { DeleteOneNatureBattleStylePreferenceArgs } from "./args/DeleteOneNatureBattleStylePreferenceArgs";
import { FindFirstNatureBattleStylePreferenceArgs } from "./args/FindFirstNatureBattleStylePreferenceArgs";
import { FindFirstNatureBattleStylePreferenceOrThrowArgs } from "./args/FindFirstNatureBattleStylePreferenceOrThrowArgs";
import { FindManyNatureBattleStylePreferenceArgs } from "./args/FindManyNatureBattleStylePreferenceArgs";
import { FindUniqueNatureBattleStylePreferenceArgs } from "./args/FindUniqueNatureBattleStylePreferenceArgs";
import { FindUniqueNatureBattleStylePreferenceOrThrowArgs } from "./args/FindUniqueNatureBattleStylePreferenceOrThrowArgs";
import { GroupByNatureBattleStylePreferenceArgs } from "./args/GroupByNatureBattleStylePreferenceArgs";
import { UpdateManyNatureBattleStylePreferenceArgs } from "./args/UpdateManyNatureBattleStylePreferenceArgs";
import { UpdateOneNatureBattleStylePreferenceArgs } from "./args/UpdateOneNatureBattleStylePreferenceArgs";
import { UpsertOneNatureBattleStylePreferenceArgs } from "./args/UpsertOneNatureBattleStylePreferenceArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { NatureBattleStylePreference } from "../../../models/NatureBattleStylePreference";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateNatureBattleStylePreference } from "../../outputs/AggregateNatureBattleStylePreference";
import { CreateManyAndReturnNatureBattleStylePreference } from "../../outputs/CreateManyAndReturnNatureBattleStylePreference";
import { NatureBattleStylePreferenceGroupBy } from "../../outputs/NatureBattleStylePreferenceGroupBy";

@TypeGraphQL.Resolver(_of => NatureBattleStylePreference)
export class NatureBattleStylePreferenceCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateNatureBattleStylePreference, {
    nullable: false
  })
  async aggregateNatureBattleStylePreference(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateNatureBattleStylePreferenceArgs): Promise<AggregateNatureBattleStylePreference> {
    return getPrismaFromContext(ctx).natureBattleStylePreferences.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyNatureBattleStylePreference(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyNatureBattleStylePreferenceArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).natureBattleStylePreferences.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnNatureBattleStylePreference], {
    nullable: false
  })
  async createManyAndReturnNatureBattleStylePreference(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnNatureBattleStylePreferenceArgs): Promise<CreateManyAndReturnNatureBattleStylePreference[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).natureBattleStylePreferences.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => NatureBattleStylePreference, {
    nullable: false
  })
  async createOneNatureBattleStylePreference(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneNatureBattleStylePreferenceArgs): Promise<NatureBattleStylePreference> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).natureBattleStylePreferences.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyNatureBattleStylePreference(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyNatureBattleStylePreferenceArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).natureBattleStylePreferences.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => NatureBattleStylePreference, {
    nullable: true
  })
  async deleteOneNatureBattleStylePreference(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneNatureBattleStylePreferenceArgs): Promise<NatureBattleStylePreference | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).natureBattleStylePreferences.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => NatureBattleStylePreference, {
    nullable: true
  })
  async findFirstNatureBattleStylePreference(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstNatureBattleStylePreferenceArgs): Promise<NatureBattleStylePreference | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).natureBattleStylePreferences.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => NatureBattleStylePreference, {
    nullable: true
  })
  async findFirstNatureBattleStylePreferenceOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstNatureBattleStylePreferenceOrThrowArgs): Promise<NatureBattleStylePreference | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).natureBattleStylePreferences.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [NatureBattleStylePreference], {
    nullable: false
  })
  async natureBattleStylePreferences(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyNatureBattleStylePreferenceArgs): Promise<NatureBattleStylePreference[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).natureBattleStylePreferences.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => NatureBattleStylePreference, {
    nullable: true
  })
  async natureBattleStylePreference(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueNatureBattleStylePreferenceArgs): Promise<NatureBattleStylePreference | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).natureBattleStylePreferences.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => NatureBattleStylePreference, {
    nullable: true
  })
  async getNatureBattleStylePreference(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueNatureBattleStylePreferenceOrThrowArgs): Promise<NatureBattleStylePreference | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).natureBattleStylePreferences.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [NatureBattleStylePreferenceGroupBy], {
    nullable: false
  })
  async groupByNatureBattleStylePreference(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByNatureBattleStylePreferenceArgs): Promise<NatureBattleStylePreferenceGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).natureBattleStylePreferences.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyNatureBattleStylePreference(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyNatureBattleStylePreferenceArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).natureBattleStylePreferences.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => NatureBattleStylePreference, {
    nullable: true
  })
  async updateOneNatureBattleStylePreference(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneNatureBattleStylePreferenceArgs): Promise<NatureBattleStylePreference | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).natureBattleStylePreferences.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => NatureBattleStylePreference, {
    nullable: false
  })
  async upsertOneNatureBattleStylePreference(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneNatureBattleStylePreferenceArgs): Promise<NatureBattleStylePreference> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).natureBattleStylePreferences.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
