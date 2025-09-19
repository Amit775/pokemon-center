import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { EncounterMethod } from "../../../models/EncounterMethod";
import { LocationArea } from "../../../models/LocationArea";
import { LocationAreaEncounterRate } from "../../../models/LocationAreaEncounterRate";
import { Version } from "../../../models/Version";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => LocationAreaEncounterRate)
export class LocationAreaEncounterRateRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => LocationArea, {
    nullable: false
  })
  async locationArea(@TypeGraphQL.Root() locationAreaEncounterRate: LocationAreaEncounterRate, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<LocationArea> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).locationAreaEncounterRates.findUniqueOrThrow({
      where: {
        location_area_id_encounter_method_id_version_id: {
          location_area_id: locationAreaEncounterRate.location_area_id,
          encounter_method_id: locationAreaEncounterRate.encounter_method_id,
          version_id: locationAreaEncounterRate.version_id,
        },
      },
    }).locationArea({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => EncounterMethod, {
    nullable: false
  })
  async encounterMethod(@TypeGraphQL.Root() locationAreaEncounterRate: LocationAreaEncounterRate, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<EncounterMethod> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).locationAreaEncounterRates.findUniqueOrThrow({
      where: {
        location_area_id_encounter_method_id_version_id: {
          location_area_id: locationAreaEncounterRate.location_area_id,
          encounter_method_id: locationAreaEncounterRate.encounter_method_id,
          version_id: locationAreaEncounterRate.version_id,
        },
      },
    }).encounterMethod({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Version, {
    nullable: false
  })
  async version(@TypeGraphQL.Root() locationAreaEncounterRate: LocationAreaEncounterRate, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Version> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).locationAreaEncounterRates.findUniqueOrThrow({
      where: {
        location_area_id_encounter_method_id_version_id: {
          location_area_id: locationAreaEncounterRate.location_area_id,
          encounter_method_id: locationAreaEncounterRate.encounter_method_id,
          version_id: locationAreaEncounterRate.version_id,
        },
      },
    }).version({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
