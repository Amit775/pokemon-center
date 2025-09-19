import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateEncounterConditionArgs } from "./args/AggregateEncounterConditionArgs";
import { CreateManyAndReturnEncounterConditionArgs } from "./args/CreateManyAndReturnEncounterConditionArgs";
import { CreateManyEncounterConditionArgs } from "./args/CreateManyEncounterConditionArgs";
import { CreateOneEncounterConditionArgs } from "./args/CreateOneEncounterConditionArgs";
import { DeleteManyEncounterConditionArgs } from "./args/DeleteManyEncounterConditionArgs";
import { DeleteOneEncounterConditionArgs } from "./args/DeleteOneEncounterConditionArgs";
import { FindFirstEncounterConditionArgs } from "./args/FindFirstEncounterConditionArgs";
import { FindFirstEncounterConditionOrThrowArgs } from "./args/FindFirstEncounterConditionOrThrowArgs";
import { FindManyEncounterConditionArgs } from "./args/FindManyEncounterConditionArgs";
import { FindUniqueEncounterConditionArgs } from "./args/FindUniqueEncounterConditionArgs";
import { FindUniqueEncounterConditionOrThrowArgs } from "./args/FindUniqueEncounterConditionOrThrowArgs";
import { GroupByEncounterConditionArgs } from "./args/GroupByEncounterConditionArgs";
import { UpdateManyEncounterConditionArgs } from "./args/UpdateManyEncounterConditionArgs";
import { UpdateOneEncounterConditionArgs } from "./args/UpdateOneEncounterConditionArgs";
import { UpsertOneEncounterConditionArgs } from "./args/UpsertOneEncounterConditionArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { EncounterCondition } from "../../../models/EncounterCondition";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateEncounterCondition } from "../../outputs/AggregateEncounterCondition";
import { CreateManyAndReturnEncounterCondition } from "../../outputs/CreateManyAndReturnEncounterCondition";
import { EncounterConditionGroupBy } from "../../outputs/EncounterConditionGroupBy";

@TypeGraphQL.Resolver(_of => EncounterCondition)
export class EncounterConditionCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateEncounterCondition, {
    nullable: false
  })
  async aggregateEncounterCondition(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateEncounterConditionArgs): Promise<AggregateEncounterCondition> {
    return getPrismaFromContext(ctx).encounterConditions.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyEncounterCondition(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyEncounterConditionArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).encounterConditions.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnEncounterCondition], {
    nullable: false
  })
  async createManyAndReturnEncounterCondition(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnEncounterConditionArgs): Promise<CreateManyAndReturnEncounterCondition[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).encounterConditions.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => EncounterCondition, {
    nullable: false
  })
  async createOneEncounterCondition(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneEncounterConditionArgs): Promise<EncounterCondition> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).encounterConditions.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyEncounterCondition(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyEncounterConditionArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).encounterConditions.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => EncounterCondition, {
    nullable: true
  })
  async deleteOneEncounterCondition(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneEncounterConditionArgs): Promise<EncounterCondition | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).encounterConditions.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => EncounterCondition, {
    nullable: true
  })
  async findFirstEncounterCondition(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstEncounterConditionArgs): Promise<EncounterCondition | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).encounterConditions.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => EncounterCondition, {
    nullable: true
  })
  async findFirstEncounterConditionOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstEncounterConditionOrThrowArgs): Promise<EncounterCondition | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).encounterConditions.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [EncounterCondition], {
    nullable: false
  })
  async encounterConditions(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyEncounterConditionArgs): Promise<EncounterCondition[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).encounterConditions.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => EncounterCondition, {
    nullable: true
  })
  async encounterCondition(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueEncounterConditionArgs): Promise<EncounterCondition | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).encounterConditions.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => EncounterCondition, {
    nullable: true
  })
  async getEncounterCondition(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueEncounterConditionOrThrowArgs): Promise<EncounterCondition | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).encounterConditions.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [EncounterConditionGroupBy], {
    nullable: false
  })
  async groupByEncounterCondition(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByEncounterConditionArgs): Promise<EncounterConditionGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).encounterConditions.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyEncounterCondition(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyEncounterConditionArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).encounterConditions.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => EncounterCondition, {
    nullable: true
  })
  async updateOneEncounterCondition(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneEncounterConditionArgs): Promise<EncounterCondition | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).encounterConditions.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => EncounterCondition, {
    nullable: false
  })
  async upsertOneEncounterCondition(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneEncounterConditionArgs): Promise<EncounterCondition> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).encounterConditions.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
