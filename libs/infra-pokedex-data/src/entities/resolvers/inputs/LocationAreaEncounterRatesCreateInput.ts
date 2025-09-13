import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterMethodsCreateNestedOneWithoutEncounterRatesInput } from "../inputs/EncounterMethodsCreateNestedOneWithoutEncounterRatesInput";
import { LocationAreasCreateNestedOneWithoutEncounterRatesInput } from "../inputs/LocationAreasCreateNestedOneWithoutEncounterRatesInput";
import { VersionsCreateNestedOneWithoutLocationAreaEncounterRatesInput } from "../inputs/VersionsCreateNestedOneWithoutLocationAreaEncounterRatesInput";

@TypeGraphQL.InputType("LocationAreaEncounterRatesCreateInput", {})
export class LocationAreaEncounterRatesCreateInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  rate!: number;

  @TypeGraphQL.Field(_type => LocationAreasCreateNestedOneWithoutEncounterRatesInput, {
    nullable: false
  })
  locationArea!: LocationAreasCreateNestedOneWithoutEncounterRatesInput;

  @TypeGraphQL.Field(_type => EncounterMethodsCreateNestedOneWithoutEncounterRatesInput, {
    nullable: false
  })
  encounterMethod!: EncounterMethodsCreateNestedOneWithoutEncounterRatesInput;

  @TypeGraphQL.Field(_type => VersionsCreateNestedOneWithoutLocationAreaEncounterRatesInput, {
    nullable: false
  })
  version!: VersionsCreateNestedOneWithoutLocationAreaEncounterRatesInput;
}
