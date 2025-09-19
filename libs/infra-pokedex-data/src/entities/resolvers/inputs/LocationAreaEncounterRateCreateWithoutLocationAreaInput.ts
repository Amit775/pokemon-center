import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterMethodCreateNestedOneWithoutEncounterRatesInput } from "../inputs/EncounterMethodCreateNestedOneWithoutEncounterRatesInput";
import { VersionCreateNestedOneWithoutLocationAreaEncounterRatesInput } from "../inputs/VersionCreateNestedOneWithoutLocationAreaEncounterRatesInput";

@TypeGraphQL.InputType("LocationAreaEncounterRateCreateWithoutLocationAreaInput", {})
export class LocationAreaEncounterRateCreateWithoutLocationAreaInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  rate!: number;

  @TypeGraphQL.Field(_type => EncounterMethodCreateNestedOneWithoutEncounterRatesInput, {
    nullable: false
  })
  encounterMethod!: EncounterMethodCreateNestedOneWithoutEncounterRatesInput;

  @TypeGraphQL.Field(_type => VersionCreateNestedOneWithoutLocationAreaEncounterRatesInput, {
    nullable: false
  })
  version!: VersionCreateNestedOneWithoutLocationAreaEncounterRatesInput;
}
