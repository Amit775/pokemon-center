import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateEncounterConditionValuesArgs } from "./args/AggregateEncounterConditionValuesArgs";
import { FindFirstEncounterConditionValuesArgs } from "./args/FindFirstEncounterConditionValuesArgs";
import { FindFirstEncounterConditionValuesOrThrowArgs } from "./args/FindFirstEncounterConditionValuesOrThrowArgs";
import { FindManyEncounterConditionValuesArgs } from "./args/FindManyEncounterConditionValuesArgs";
import { FindUniqueEncounterConditionValuesArgs } from "./args/FindUniqueEncounterConditionValuesArgs";
import { FindUniqueEncounterConditionValuesOrThrowArgs } from "./args/FindUniqueEncounterConditionValuesOrThrowArgs";
import { GroupByEncounterConditionValuesArgs } from "./args/GroupByEncounterConditionValuesArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { EncounterConditionValues } from "../../../models/EncounterConditionValues";
import { AggregateEncounterConditionValues } from "../../outputs/AggregateEncounterConditionValues";
import { EncounterConditionValuesGroupBy } from "../../outputs/EncounterConditionValuesGroupBy";

@TypeGraphQL.Resolver(_of => EncounterConditionValues)
export class EncounterConditionValuesCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateEncounterConditionValues, {
    nullable: false
  })
  async aggregateEncounterConditionValues(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateEncounterConditionValuesArgs): Promise<AggregateEncounterConditionValues> {
    return getPrismaFromContext(ctx).encounterConditionValues.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Query(_returns => EncounterConditionValues, {
    nullable: true
  })
  async findFirstEncounterConditionValues(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstEncounterConditionValuesArgs): Promise<EncounterConditionValues | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).encounterConditionValues.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => EncounterConditionValues, {
    nullable: true
  })
  async findFirstEncounterConditionValuesOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstEncounterConditionValuesOrThrowArgs): Promise<EncounterConditionValues | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).encounterConditionValues.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [EncounterConditionValues], {
    nullable: false
  })
  async findManyEncounterConditionValues(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyEncounterConditionValuesArgs): Promise<EncounterConditionValues[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).encounterConditionValues.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => EncounterConditionValues, {
    nullable: true
  })
  async findUniqueEncounterConditionValues(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueEncounterConditionValuesArgs): Promise<EncounterConditionValues | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).encounterConditionValues.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => EncounterConditionValues, {
    nullable: true
  })
  async findUniqueEncounterConditionValuesOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueEncounterConditionValuesOrThrowArgs): Promise<EncounterConditionValues | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).encounterConditionValues.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [EncounterConditionValuesGroupBy], {
    nullable: false
  })
  async groupByEncounterConditionValues(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByEncounterConditionValuesArgs): Promise<EncounterConditionValuesGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).encounterConditionValues.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

}