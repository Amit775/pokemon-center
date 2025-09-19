import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByEncounterConditionValueMapArgs } from "./args/GroupByEncounterConditionValueMapArgs";
import { EncounterConditionValueMap } from "../../../models/EncounterConditionValueMap";
import { EncounterConditionValueMapGroupBy } from "../../outputs/EncounterConditionValueMapGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => EncounterConditionValueMap)
export class GroupByEncounterConditionValueMapResolver {
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
