import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByEncounterConditionArgs } from "./args/GroupByEncounterConditionArgs";
import { EncounterCondition } from "../../../models/EncounterCondition";
import { EncounterConditionGroupBy } from "../../outputs/EncounterConditionGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => EncounterCondition)
export class GroupByEncounterConditionResolver {
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
