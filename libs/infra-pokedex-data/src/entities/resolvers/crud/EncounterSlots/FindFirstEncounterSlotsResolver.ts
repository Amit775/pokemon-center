import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstEncounterSlotsArgs } from "./args/FindFirstEncounterSlotsArgs";
import { EncounterSlots } from "../../../models/EncounterSlots";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => EncounterSlots)
export class FindFirstEncounterSlotsResolver {
  @TypeGraphQL.Query(_returns => EncounterSlots, {
    nullable: true
  })
  async findFirstEncounterSlots(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstEncounterSlotsArgs): Promise<EncounterSlots | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).encounterSlots.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
