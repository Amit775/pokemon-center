import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneEncounterSlotsArgs } from "./args/UpdateOneEncounterSlotsArgs";
import { EncounterSlots } from "../../../models/EncounterSlots";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => EncounterSlots)
export class UpdateOneEncounterSlotsResolver {
  @TypeGraphQL.Mutation(_returns => EncounterSlots, {
    nullable: true
  })
  async updateOneEncounterSlots(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneEncounterSlotsArgs): Promise<EncounterSlots | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).encounterSlots.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
