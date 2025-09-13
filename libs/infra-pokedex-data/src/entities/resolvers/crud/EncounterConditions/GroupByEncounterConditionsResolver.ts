import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByEncounterConditionsArgs } from "./args/GroupByEncounterConditionsArgs";
import { EncounterConditions } from "../../../models/EncounterConditions";
import { EncounterConditionsGroupBy } from "../../outputs/EncounterConditionsGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => EncounterConditions)
export class GroupByEncounterConditionsResolver {
  @TypeGraphQL.Query(_returns => [EncounterConditionsGroupBy], {
    nullable: false
  })
  async groupByEncounterConditions(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByEncounterConditionsArgs): Promise<EncounterConditionsGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).encounterConditions.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
