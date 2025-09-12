import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateNatureBattleStylePreferencesArgs } from "./args/AggregateNatureBattleStylePreferencesArgs";
import { CreateManyAndReturnNatureBattleStylePreferencesArgs } from "./args/CreateManyAndReturnNatureBattleStylePreferencesArgs";
import { CreateManyNatureBattleStylePreferencesArgs } from "./args/CreateManyNatureBattleStylePreferencesArgs";
import { CreateOneNatureBattleStylePreferencesArgs } from "./args/CreateOneNatureBattleStylePreferencesArgs";
import { DeleteManyNatureBattleStylePreferencesArgs } from "./args/DeleteManyNatureBattleStylePreferencesArgs";
import { DeleteOneNatureBattleStylePreferencesArgs } from "./args/DeleteOneNatureBattleStylePreferencesArgs";
import { FindFirstNatureBattleStylePreferencesArgs } from "./args/FindFirstNatureBattleStylePreferencesArgs";
import { FindFirstNatureBattleStylePreferencesOrThrowArgs } from "./args/FindFirstNatureBattleStylePreferencesOrThrowArgs";
import { FindManyNatureBattleStylePreferencesArgs } from "./args/FindManyNatureBattleStylePreferencesArgs";
import { FindUniqueNatureBattleStylePreferencesArgs } from "./args/FindUniqueNatureBattleStylePreferencesArgs";
import { FindUniqueNatureBattleStylePreferencesOrThrowArgs } from "./args/FindUniqueNatureBattleStylePreferencesOrThrowArgs";
import { GroupByNatureBattleStylePreferencesArgs } from "./args/GroupByNatureBattleStylePreferencesArgs";
import { UpdateManyNatureBattleStylePreferencesArgs } from "./args/UpdateManyNatureBattleStylePreferencesArgs";
import { UpdateOneNatureBattleStylePreferencesArgs } from "./args/UpdateOneNatureBattleStylePreferencesArgs";
import { UpsertOneNatureBattleStylePreferencesArgs } from "./args/UpsertOneNatureBattleStylePreferencesArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { NatureBattleStylePreferences } from "../../../models/NatureBattleStylePreferences";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateNatureBattleStylePreferences } from "../../outputs/AggregateNatureBattleStylePreferences";
import { CreateManyAndReturnNatureBattleStylePreferences } from "../../outputs/CreateManyAndReturnNatureBattleStylePreferences";
import { NatureBattleStylePreferencesGroupBy } from "../../outputs/NatureBattleStylePreferencesGroupBy";

@TypeGraphQL.Resolver(_of => NatureBattleStylePreferences)
export class NatureBattleStylePreferencesCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateNatureBattleStylePreferences, {
    nullable: false
  })
  async aggregateNatureBattleStylePreferences(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateNatureBattleStylePreferencesArgs): Promise<AggregateNatureBattleStylePreferences> {
    return getPrismaFromContext(ctx).natureBattleStylePreferences.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyNatureBattleStylePreferences(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyNatureBattleStylePreferencesArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).natureBattleStylePreferences.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnNatureBattleStylePreferences], {
    nullable: false
  })
  async createManyAndReturnNatureBattleStylePreferences(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnNatureBattleStylePreferencesArgs): Promise<CreateManyAndReturnNatureBattleStylePreferences[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).natureBattleStylePreferences.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => NatureBattleStylePreferences, {
    nullable: false
  })
  async createOneNatureBattleStylePreferences(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneNatureBattleStylePreferencesArgs): Promise<NatureBattleStylePreferences> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).natureBattleStylePreferences.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyNatureBattleStylePreferences(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyNatureBattleStylePreferencesArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).natureBattleStylePreferences.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => NatureBattleStylePreferences, {
    nullable: true
  })
  async deleteOneNatureBattleStylePreferences(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneNatureBattleStylePreferencesArgs): Promise<NatureBattleStylePreferences | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).natureBattleStylePreferences.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => NatureBattleStylePreferences, {
    nullable: true
  })
  async findFirstNatureBattleStylePreferences(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstNatureBattleStylePreferencesArgs): Promise<NatureBattleStylePreferences | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).natureBattleStylePreferences.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => NatureBattleStylePreferences, {
    nullable: true
  })
  async findFirstNatureBattleStylePreferencesOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstNatureBattleStylePreferencesOrThrowArgs): Promise<NatureBattleStylePreferences | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).natureBattleStylePreferences.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [NatureBattleStylePreferences], {
    nullable: false
  })
  async findManyNatureBattleStylePreferences(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyNatureBattleStylePreferencesArgs): Promise<NatureBattleStylePreferences[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).natureBattleStylePreferences.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => NatureBattleStylePreferences, {
    nullable: true
  })
  async findUniqueNatureBattleStylePreferences(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueNatureBattleStylePreferencesArgs): Promise<NatureBattleStylePreferences | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).natureBattleStylePreferences.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => NatureBattleStylePreferences, {
    nullable: true
  })
  async findUniqueNatureBattleStylePreferencesOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueNatureBattleStylePreferencesOrThrowArgs): Promise<NatureBattleStylePreferences | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).natureBattleStylePreferences.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [NatureBattleStylePreferencesGroupBy], {
    nullable: false
  })
  async groupByNatureBattleStylePreferences(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByNatureBattleStylePreferencesArgs): Promise<NatureBattleStylePreferencesGroupBy[]> {
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
  async updateManyNatureBattleStylePreferences(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyNatureBattleStylePreferencesArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).natureBattleStylePreferences.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => NatureBattleStylePreferences, {
    nullable: true
  })
  async updateOneNatureBattleStylePreferences(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneNatureBattleStylePreferencesArgs): Promise<NatureBattleStylePreferences | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).natureBattleStylePreferences.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => NatureBattleStylePreferences, {
    nullable: false
  })
  async upsertOneNatureBattleStylePreferences(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneNatureBattleStylePreferencesArgs): Promise<NatureBattleStylePreferences> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).natureBattleStylePreferences.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
