import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateEncounterSlotsArgs } from "./args/AggregateEncounterSlotsArgs";
import { EncounterSlots } from "../../../models/EncounterSlots";
import { AggregateEncounterSlots } from "../../outputs/AggregateEncounterSlots";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => EncounterSlots)
export class AggregateEncounterSlotsResolver {
  @TypeGraphQL.Query(_returns => AggregateEncounterSlots, {
    nullable: false
  })
  async aggregateEncounterSlots(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateEncounterSlotsArgs): Promise<AggregateEncounterSlots> {
    return getPrismaFromContext(ctx).encounterSlots.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
