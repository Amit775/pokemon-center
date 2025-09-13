import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateEncounterConditionValueMapArgs } from "./args/AggregateEncounterConditionValueMapArgs";
import { FindFirstEncounterConditionValueMapArgs } from "./args/FindFirstEncounterConditionValueMapArgs";
import { FindFirstEncounterConditionValueMapOrThrowArgs } from "./args/FindFirstEncounterConditionValueMapOrThrowArgs";
import { FindManyEncounterConditionValueMapArgs } from "./args/FindManyEncounterConditionValueMapArgs";
import { FindUniqueEncounterConditionValueMapArgs } from "./args/FindUniqueEncounterConditionValueMapArgs";
import { FindUniqueEncounterConditionValueMapOrThrowArgs } from "./args/FindUniqueEncounterConditionValueMapOrThrowArgs";
import { GroupByEncounterConditionValueMapArgs } from "./args/GroupByEncounterConditionValueMapArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { EncounterConditionValueMap } from "../../../models/EncounterConditionValueMap";
import { AggregateEncounterConditionValueMap } from "../../outputs/AggregateEncounterConditionValueMap";
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

}