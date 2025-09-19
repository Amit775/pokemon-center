import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneEncounterSlotArgs } from "./args/UpsertOneEncounterSlotArgs";
import { EncounterSlot } from "../../../models/EncounterSlot";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => EncounterSlot)
export class UpsertOneEncounterSlotResolver {
  @TypeGraphQL.Mutation(_returns => EncounterSlot, {
    nullable: false
  })
  async upsertOneEncounterSlot(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneEncounterSlotArgs): Promise<EncounterSlot> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).encounterSlots.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
