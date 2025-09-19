import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterMethodCreateNestedOneWithoutEncounterRatesInput } from "../inputs/EncounterMethodCreateNestedOneWithoutEncounterRatesInput";
import { LocationAreaCreateNestedOneWithoutEncounterRatesInput } from "../inputs/LocationAreaCreateNestedOneWithoutEncounterRatesInput";

@TypeGraphQL.InputType("LocationAreaEncounterRateCreateWithoutVersionInput", {})
export class LocationAreaEncounterRateCreateWithoutVersionInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  rate!: number;

  @TypeGraphQL.Field(_type => LocationAreaCreateNestedOneWithoutEncounterRatesInput, {
    nullable: false
  })
  locationArea!: LocationAreaCreateNestedOneWithoutEncounterRatesInput;

  @TypeGraphQL.Field(_type => EncounterMethodCreateNestedOneWithoutEncounterRatesInput, {
    nullable: false
  })
  encounterMethod!: EncounterMethodCreateNestedOneWithoutEncounterRatesInput;
}
