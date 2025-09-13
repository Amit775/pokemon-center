import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Encounters } from "../../../models/Encounters";
import { LocationAreaEncounterRates } from "../../../models/LocationAreaEncounterRates";
import { LocationAreas } from "../../../models/LocationAreas";
import { Locations } from "../../../models/Locations";
import { LocationAreasEncounterRatesArgs } from "./args/LocationAreasEncounterRatesArgs";
import { LocationAreasEncountersArgs } from "./args/LocationAreasEncountersArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => LocationAreas)
export class LocationAreasRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Locations, {
    nullable: false
  })
  async location(@TypeGraphQL.Root() locationAreas: LocationAreas, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Locations> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).locationAreas.findUniqueOrThrow({
      where: {
        id: locationAreas.id,
      },
    }).location({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [Encounters], {
    nullable: false
  })
  async encounters(@TypeGraphQL.Root() locationAreas: LocationAreas, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: LocationAreasEncountersArgs): Promise<Encounters[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).locationAreas.findUniqueOrThrow({
      where: {
        id: locationAreas.id,
      },
    }).encounters({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [LocationAreaEncounterRates], {
    nullable: false
  })
  async encounterRates(@TypeGraphQL.Root() locationAreas: LocationAreas, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: LocationAreasEncounterRatesArgs): Promise<LocationAreaEncounterRates[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).locationAreas.findUniqueOrThrow({
      where: {
        id: locationAreas.id,
      },
    }).encounterRates({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
