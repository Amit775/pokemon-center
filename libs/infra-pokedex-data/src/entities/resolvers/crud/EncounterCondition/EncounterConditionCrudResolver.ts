import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateEncounterConditionArgs } from "./args/AggregateEncounterConditionArgs";
import { FindFirstEncounterConditionArgs } from "./args/FindFirstEncounterConditionArgs";
import { FindFirstEncounterConditionOrThrowArgs } from "./args/FindFirstEncounterConditionOrThrowArgs";
import { FindManyEncounterConditionArgs } from "./args/FindManyEncounterConditionArgs";
import { FindUniqueEncounterConditionArgs } from "./args/FindUniqueEncounterConditionArgs";
import { FindUniqueEncounterConditionOrThrowArgs } from "./args/FindUniqueEncounterConditionOrThrowArgs";
import { GroupByEncounterConditionArgs } from "./args/GroupByEncounterConditionArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { EncounterCondition } from "../../../models/EncounterCondition";
import { AggregateEncounterCondition } from "../../outputs/AggregateEncounterCondition";
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

}