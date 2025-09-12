import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterMethods } from "../../models/EncounterMethods";
import { LocationAreas } from "../../models/LocationAreas";
import { Versions } from "../../models/Versions";

@TypeGraphQL.ObjectType("CreateManyAndReturnLocationAreaEncounterRates", {})
export class CreateManyAndReturnLocationAreaEncounterRates {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  location_area_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  encounter_method_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  version_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  rate!: number;

  @TypeGraphQL.Field(_type => LocationAreas, {
    nullable: false
  })
  locationArea!: LocationAreas;

  @TypeGraphQL.Field(_type => EncounterMethods, {
    nullable: false
  })
  encounterMethod!: EncounterMethods;

  @TypeGraphQL.Field(_type => Versions, {
    nullable: false
  })
  version!: Versions;
}
