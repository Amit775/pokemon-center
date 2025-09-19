import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueEncounterSlotOrThrowArgs } from "./args/FindUniqueEncounterSlotOrThrowArgs";
import { EncounterSlot } from "../../../models/EncounterSlot";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => EncounterSlot)
export class FindUniqueEncounterSlotOrThrowResolver {
  @TypeGraphQL.Query(_returns => EncounterSlot, {
    nullable: true
  })
  async getEncounterSlot(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueEncounterSlotOrThrowArgs): Promise<EncounterSlot | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).encounterSlots.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
