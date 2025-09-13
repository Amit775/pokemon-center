import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { EncounterMethods } from "../../../models/EncounterMethods";
import { LocationAreaEncounterRates } from "../../../models/LocationAreaEncounterRates";
import { LocationAreas } from "../../../models/LocationAreas";
import { Versions } from "../../../models/Versions";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => LocationAreaEncounterRates)
export class LocationAreaEncounterRatesRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => LocationAreas, {
    nullable: false
  })
  async locationArea(@TypeGraphQL.Root() locationAreaEncounterRates: LocationAreaEncounterRates, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<LocationAreas> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).locationAreaEncounterRates.findUniqueOrThrow({
      where: {
        location_area_id_encounter_method_id_version_id: {
          location_area_id: locationAreaEncounterRates.location_area_id,
          encounter_method_id: locationAreaEncounterRates.encounter_method_id,
          version_id: locationAreaEncounterRates.version_id,
        },
      },
    }).locationArea({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => EncounterMethods, {
    nullable: false
  })
  async encounterMethod(@TypeGraphQL.Root() locationAreaEncounterRates: LocationAreaEncounterRates, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<EncounterMethods> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).locationAreaEncounterRates.findUniqueOrThrow({
      where: {
        location_area_id_encounter_method_id_version_id: {
          location_area_id: locationAreaEncounterRates.location_area_id,
          encounter_method_id: locationAreaEncounterRates.encounter_method_id,
          version_id: locationAreaEncounterRates.version_id,
        },
      },
    }).encounterMethod({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Versions, {
    nullable: false
  })
  async version(@TypeGraphQL.Root() locationAreaEncounterRates: LocationAreaEncounterRates, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Versions> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).locationAreaEncounterRates.findUniqueOrThrow({
      where: {
        location_area_id_encounter_method_id_version_id: {
          location_area_id: locationAreaEncounterRates.location_area_id,
          encounter_method_id: locationAreaEncounterRates.encounter_method_id,
          version_id: locationAreaEncounterRates.version_id,
        },
      },
    }).version({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
