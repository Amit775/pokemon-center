import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateEncounterConditionValueMapArgs } from "./args/AggregateEncounterConditionValueMapArgs";
import { CreateManyAndReturnEncounterConditionValueMapArgs } from "./args/CreateManyAndReturnEncounterConditionValueMapArgs";
import { CreateManyEncounterConditionValueMapArgs } from "./args/CreateManyEncounterConditionValueMapArgs";
import { CreateOneEncounterConditionValueMapArgs } from "./args/CreateOneEncounterConditionValueMapArgs";
import { DeleteManyEncounterConditionValueMapArgs } from "./args/DeleteManyEncounterConditionValueMapArgs";
import { DeleteOneEncounterConditionValueMapArgs } from "./args/DeleteOneEncounterConditionValueMapArgs";
import { FindFirstEncounterConditionValueMapArgs } from "./args/FindFirstEncounterConditionValueMapArgs";
import { FindFirstEncounterConditionValueMapOrThrowArgs } from "./args/FindFirstEncounterConditionValueMapOrThrowArgs";
import { FindManyEncounterConditionValueMapArgs } from "./args/FindManyEncounterConditionValueMapArgs";
import { FindUniqueEncounterConditionValueMapArgs } from "./args/FindUniqueEncounterConditionValueMapArgs";
import { FindUniqueEncounterConditionValueMapOrThrowArgs } from "./args/FindUniqueEncounterConditionValueMapOrThrowArgs";
import { GroupByEncounterConditionValueMapArgs } from "./args/GroupByEncounterConditionValueMapArgs";
import { UpdateManyEncounterConditionValueMapArgs } from "./args/UpdateManyEncounterConditionValueMapArgs";
import { UpdateOneEncounterConditionValueMapArgs } from "./args/UpdateOneEncounterConditionValueMapArgs";
import { UpsertOneEncounterConditionValueMapArgs } from "./args/UpsertOneEncounterConditionValueMapArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { EncounterConditionValueMap } from "../../../models/EncounterConditionValueMap";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateEncounterConditionValueMap } from "../../outputs/AggregateEncounterConditionValueMap";
import { CreateManyAndReturnEncounterConditionValueMap } from "../../outputs/CreateManyAndReturnEncounterConditionValueMap";
import { EncounterConditionValueMapGroupBy } from "../../outputs/EncounterConditionValueMapGroupBy";

@TypeGraphQL.Resolver(_of => EncounterConditionValueMap)
export class EncounterConditionValueMapCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateEncounterConditionValueMap, {
    nullable: false
  })
  async aggregateEncounterConditionValueMap(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateEncounterConditionValueMapArgs): Promise<AggregateEncounterConditionValueMap> {
    return getPrismaFromContext(ctx).encounterConditionValueMap.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyEncounterConditionValueMap(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyEncounterConditionValueMapArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).encounterConditionValueMap.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnEncounterConditionValueMap], {
    nullable: false
  })
  async createManyAndReturnEncounterConditionValueMap(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnEncounterConditionValueMapArgs): Promise<CreateManyAndReturnEncounterConditionValueMap[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).encounterConditionValueMap.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => EncounterConditionValueMap, {
    nullable: false
  })
  async createOneEncounterConditionValueMap(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneEncounterConditionValueMapArgs): Promise<EncounterConditionValueMap> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).encounterConditionValueMap.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyEncounterConditionValueMap(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyEncounterConditionValueMapArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).encounterConditionValueMap.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => EncounterConditionValueMap, {
    nullable: true
  })
  async deleteOneEncounterConditionValueMap(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneEncounterConditionValueMapArgs): Promise<EncounterConditionValueMap | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).encounterConditionValueMap.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => EncounterConditionValueMap, {
    nullable: true
  })
  async findFirstEncounterConditionValueMap(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstEncounterConditionValueMapArgs): Promise<EncounterConditionValueMap | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).encounterConditionValueMap.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => EncounterConditionValueMap, {
    nullable: true
  })
  async findFirstEncounterConditionValueMapOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstEncounterConditionValueMapOrThrowArgs): Promise<EncounterConditionValueMap | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).encounterConditionValueMap.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [EncounterConditionValueMap], {
    nullable: false
  })
  async encounterConditionValueMaps(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyEncounterConditionValueMapArgs): Promise<EncounterConditionValueMap[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).encounterConditionValueMap.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => EncounterConditionValueMap, {
    nullable: true
  })
  async encounterConditionValueMap(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueEncounterConditionValueMapArgs): Promise<EncounterConditionValueMap | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).encounterConditionValueMap.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => EncounterConditionValueMap, {
    nullable: true
  })
  async getEncounterConditionValueMap(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueEncounterConditionValueMapOrThrowArgs): Promise<EncounterConditionValueMap | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).encounterConditionValueMap.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [EncounterConditionValueMapGroupBy], {
    nullable: false
  })
  async groupByEncounterConditionValueMap(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByEncounterConditionValueMapArgs): Promise<EncounterConditionValueMapGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).encounterConditionValueMap.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyEncounterConditionValueMap(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyEncounterConditionValueMapArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).encounterConditionValueMap.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => EncounterConditionValueMap, {
    nullable: true
  })
  async updateOneEncounterConditionValueMap(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneEncounterConditionValueMapArgs): Promise<EncounterConditionValueMap | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).encounterConditionValueMap.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => EncounterConditionValueMap, {
    nullable: false
  })
  async upsertOneEncounterConditionValueMap(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneEncounterConditionValueMapArgs): Promise<EncounterConditionValueMap> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).encounterConditionValueMap.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
