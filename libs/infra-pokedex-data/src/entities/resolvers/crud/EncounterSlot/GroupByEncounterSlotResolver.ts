import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByEncounterSlotArgs } from "./args/GroupByEncounterSlotArgs";
import { EncounterSlot } from "../../../models/EncounterSlot";
import { EncounterSlotGroupBy } from "../../outputs/EncounterSlotGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => EncounterSlot)
export class GroupByEncounterSlotResolver {
  @TypeGraphQL.Query(_returns => [EncounterSlotGroupBy], {
    nullable: false
  })
  async groupByEncounterSlot(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByEncounterSlotArgs): Promise<EncounterSlotGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).encounterSlots.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
