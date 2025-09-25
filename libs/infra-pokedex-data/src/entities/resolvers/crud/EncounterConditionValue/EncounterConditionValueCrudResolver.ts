import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateEncounterConditionValueArgs } from "./args/AggregateEncounterConditionValueArgs";
import { FindFirstEncounterConditionValueArgs } from "./args/FindFirstEncounterConditionValueArgs";
import { FindFirstEncounterConditionValueOrThrowArgs } from "./args/FindFirstEncounterConditionValueOrThrowArgs";
import { FindManyEncounterConditionValueArgs } from "./args/FindManyEncounterConditionValueArgs";
import { FindUniqueEncounterConditionValueArgs } from "./args/FindUniqueEncounterConditionValueArgs";
import { FindUniqueEncounterConditionValueOrThrowArgs } from "./args/FindUniqueEncounterConditionValueOrThrowArgs";
import { GroupByEncounterConditionValueArgs } from "./args/GroupByEncounterConditionValueArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { EncounterConditionValue } from "../../../models/EncounterConditionValue";
import { AggregateEncounterConditionValue } from "../../outputs/AggregateEncounterConditionValue";
import { EncounterConditionValueGroupBy } from "../../outputs/EncounterConditionValueGroupBy";

@TypeGraphQL.Resolver(_of => EncounterConditionValue)
export class EncounterConditionValueCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateEncounterConditionValue, {
    nullable: false
  })
  async aggregateEncounterConditionValue(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateEncounterConditionValueArgs): Promise<AggregateEncounterConditionValue> {
    return getPrismaFromContext(ctx).encounterConditionValues.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Query(_returns => EncounterConditionValue, {
    nullable: true
  })
  async findFirstEncounterConditionValue(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstEncounterConditionValueArgs): Promise<EncounterConditionValue | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).encounterConditionValues.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => EncounterConditionValue, {
    nullable: true
  })
  async findFirstEncounterConditionValueOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstEncounterConditionValueOrThrowArgs): Promise<EncounterConditionValue | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).encounterConditionValues.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [EncounterConditionValue], {
    nullable: false
  })
  async encounterConditionValues(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyEncounterConditionValueArgs): Promise<EncounterConditionValue[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).encounterConditionValues.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => EncounterConditionValue, {
    nullable: true
  })
  async encounterConditionValue(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueEncounterConditionValueArgs): Promise<EncounterConditionValue | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).encounterConditionValues.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => EncounterConditionValue, {
    nullable: true
  })
  async getEncounterConditionValue(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueEncounterConditionValueOrThrowArgs): Promise<EncounterConditionValue | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).encounterConditionValues.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [EncounterConditionValueGroupBy], {
    nullable: false
  })
  async groupByEncounterConditionValue(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByEncounterConditionValueArgs): Promise<EncounterConditionValueGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).encounterConditionValues.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

}