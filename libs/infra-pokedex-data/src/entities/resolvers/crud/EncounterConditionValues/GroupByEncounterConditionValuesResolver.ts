import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByEncounterConditionValuesArgs } from "./args/GroupByEncounterConditionValuesArgs";
import { EncounterConditionValues } from "../../../models/EncounterConditionValues";
import { EncounterConditionValuesGroupBy } from "../../outputs/EncounterConditionValuesGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => EncounterConditionValues)
export class GroupByEncounterConditionValuesResolver {
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
