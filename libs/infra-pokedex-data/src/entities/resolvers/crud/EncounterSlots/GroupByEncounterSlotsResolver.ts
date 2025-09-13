import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByEncounterSlotsArgs } from "./args/GroupByEncounterSlotsArgs";
import { EncounterSlots } from "../../../models/EncounterSlots";
import { EncounterSlotsGroupBy } from "../../outputs/EncounterSlotsGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => EncounterSlots)
export class GroupByEncounterSlotsResolver {
  @TypeGraphQL.Query(_returns => [EncounterSlotsGroupBy], {
    nullable: false
  })
  async groupByEncounterSlots(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByEncounterSlotsArgs): Promise<EncounterSlotsGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).encounterSlots.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
