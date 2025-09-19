import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Encounter } from "../../../models/Encounter";
import { Location } from "../../../models/Location";
import { LocationArea } from "../../../models/LocationArea";
import { LocationAreaEncounterRate } from "../../../models/LocationAreaEncounterRate";
import { LocationAreaEncounterRatesArgs } from "./args/LocationAreaEncounterRatesArgs";
import { LocationAreaEncountersArgs } from "./args/LocationAreaEncountersArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => LocationArea)
export class LocationAreaRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Location, {
    nullable: false
  })
  async location(@TypeGraphQL.Root() locationArea: LocationArea, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Location> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).locationAreas.findUniqueOrThrow({
      where: {
        id: locationArea.id,
      },
    }).location({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [Encounter], {
    nullable: false
  })
  async encounters(@TypeGraphQL.Root() locationArea: LocationArea, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: LocationAreaEncountersArgs): Promise<Encounter[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).locationAreas.findUniqueOrThrow({
      where: {
        id: locationArea.id,
      },
    }).encounters({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [LocationAreaEncounterRate], {
    nullable: false
  })
  async encounterRates(@TypeGraphQL.Root() locationArea: LocationArea, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: LocationAreaEncounterRatesArgs): Promise<LocationAreaEncounterRate[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).locationAreas.findUniqueOrThrow({
      where: {
        id: locationArea.id,
      },
    }).encounterRates({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
