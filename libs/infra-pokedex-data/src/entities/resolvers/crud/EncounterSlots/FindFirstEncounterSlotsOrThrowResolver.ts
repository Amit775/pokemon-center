import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstEncounterSlotsOrThrowArgs } from "./args/FindFirstEncounterSlotsOrThrowArgs";
import { EncounterSlots } from "../../../models/EncounterSlots";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => EncounterSlots)
export class FindFirstEncounterSlotsOrThrowResolver {
  @TypeGraphQL.Query(_returns => EncounterSlots, {
    nullable: true
  })
  async findFirstEncounterSlotsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstEncounterSlotsOrThrowArgs): Promise<EncounterSlots | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).encounterSlots.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
