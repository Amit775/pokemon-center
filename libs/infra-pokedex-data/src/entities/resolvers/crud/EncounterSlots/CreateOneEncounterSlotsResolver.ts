import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateOneEncounterSlotsArgs } from "./args/CreateOneEncounterSlotsArgs";
import { EncounterSlots } from "../../../models/EncounterSlots";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => EncounterSlots)
export class CreateOneEncounterSlotsResolver {
  @TypeGraphQL.Mutation(_returns => EncounterSlots, {
    nullable: false
  })
  async createOneEncounterSlots(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneEncounterSlotsArgs): Promise<EncounterSlots> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).encounterSlots.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
