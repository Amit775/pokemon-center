import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { EncounterMethod } from "../../../models/EncounterMethod";
import { EncounterSlot } from "../../../models/EncounterSlot";
import { LocationAreaEncounterRate } from "../../../models/LocationAreaEncounterRate";
import { EncounterMethodEncounterRatesArgs } from "./args/EncounterMethodEncounterRatesArgs";
import { EncounterMethodSlotsArgs } from "./args/EncounterMethodSlotsArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => EncounterMethod)
export class EncounterMethodRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [EncounterSlot], {
    nullable: false
  })
  async slots(@TypeGraphQL.Root() encounterMethod: EncounterMethod, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: EncounterMethodSlotsArgs): Promise<EncounterSlot[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).encounterMethods.findUniqueOrThrow({
      where: {
        id: encounterMethod.id,
      },
    }).slots({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [LocationAreaEncounterRate], {
    nullable: false
  })
  async encounterRates(@TypeGraphQL.Root() encounterMethod: EncounterMethod, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: EncounterMethodEncounterRatesArgs): Promise<LocationAreaEncounterRate[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).encounterMethods.findUniqueOrThrow({
      where: {
        id: encounterMethod.id,
      },
    }).encounterRates({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
