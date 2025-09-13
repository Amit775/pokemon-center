import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { EncounterMethods } from "../../../models/EncounterMethods";
import { EncounterSlots } from "../../../models/EncounterSlots";
import { LocationAreaEncounterRates } from "../../../models/LocationAreaEncounterRates";
import { EncounterMethodsEncounterRatesArgs } from "./args/EncounterMethodsEncounterRatesArgs";
import { EncounterMethodsSlotsArgs } from "./args/EncounterMethodsSlotsArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => EncounterMethods)
export class EncounterMethodsRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [EncounterSlots], {
    nullable: false
  })
  async slots(@TypeGraphQL.Root() encounterMethods: EncounterMethods, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: EncounterMethodsSlotsArgs): Promise<EncounterSlots[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).encounterMethods.findUniqueOrThrow({
      where: {
        id: encounterMethods.id,
      },
    }).slots({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [LocationAreaEncounterRates], {
    nullable: false
  })
  async encounterRates(@TypeGraphQL.Root() encounterMethods: EncounterMethods, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: EncounterMethodsEncounterRatesArgs): Promise<LocationAreaEncounterRates[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).encounterMethods.findUniqueOrThrow({
      where: {
        id: encounterMethods.id,
      },
    }).encounterRates({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
