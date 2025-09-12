import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnEncounterSlotsArgs } from "./args/CreateManyAndReturnEncounterSlotsArgs";
import { EncounterSlots } from "../../../models/EncounterSlots";
import { CreateManyAndReturnEncounterSlots } from "../../outputs/CreateManyAndReturnEncounterSlots";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => EncounterSlots)
export class CreateManyAndReturnEncounterSlotsResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnEncounterSlots], {
    nullable: false
  })
  async createManyAndReturnEncounterSlots(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnEncounterSlotsArgs): Promise<CreateManyAndReturnEncounterSlots[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).encounterSlots.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
