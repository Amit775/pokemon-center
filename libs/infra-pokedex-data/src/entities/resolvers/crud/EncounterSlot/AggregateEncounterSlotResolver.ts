import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateEncounterSlotArgs } from "./args/AggregateEncounterSlotArgs";
import { EncounterSlot } from "../../../models/EncounterSlot";
import { AggregateEncounterSlot } from "../../outputs/AggregateEncounterSlot";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => EncounterSlot)
export class AggregateEncounterSlotResolver {
  @TypeGraphQL.Query(_returns => AggregateEncounterSlot, {
    nullable: false
  })
  async aggregateEncounterSlot(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateEncounterSlotArgs): Promise<AggregateEncounterSlot> {
    return getPrismaFromContext(ctx).encounterSlots.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
