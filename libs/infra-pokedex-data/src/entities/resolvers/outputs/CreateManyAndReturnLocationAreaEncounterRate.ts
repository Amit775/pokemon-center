import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterMethod } from "../../models/EncounterMethod";
import { LocationArea } from "../../models/LocationArea";
import { Version } from "../../models/Version";

@TypeGraphQL.ObjectType("CreateManyAndReturnLocationAreaEncounterRate", {})
export class CreateManyAndReturnLocationAreaEncounterRate {
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

  @TypeGraphQL.Field(_type => LocationArea, {
    nullable: false
  })
  locationArea!: LocationArea;

  @TypeGraphQL.Field(_type => EncounterMethod, {
    nullable: false
  })
  encounterMethod!: EncounterMethod;

  @TypeGraphQL.Field(_type => Version, {
    nullable: false
  })
  version!: Version;
}
