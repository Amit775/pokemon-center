import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindManyEncounterSlotsArgs } from "./args/FindManyEncounterSlotsArgs";
import { EncounterSlots } from "../../../models/EncounterSlots";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => EncounterSlots)
export class FindManyEncounterSlotsResolver {
  @TypeGraphQL.Query(_returns => [EncounterSlots], {
    nullable: false
  })
  async findManyEncounterSlots(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyEncounterSlotsArgs): Promise<EncounterSlots[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).encounterSlots.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
