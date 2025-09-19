import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnEncounterSlotArgs } from "./args/CreateManyAndReturnEncounterSlotArgs";
import { EncounterSlot } from "../../../models/EncounterSlot";
import { CreateManyAndReturnEncounterSlot } from "../../outputs/CreateManyAndReturnEncounterSlot";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => EncounterSlot)
export class CreateManyAndReturnEncounterSlotResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnEncounterSlot], {
    nullable: false
  })
  async createManyAndReturnEncounterSlot(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnEncounterSlotArgs): Promise<CreateManyAndReturnEncounterSlot[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).encounterSlots.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
