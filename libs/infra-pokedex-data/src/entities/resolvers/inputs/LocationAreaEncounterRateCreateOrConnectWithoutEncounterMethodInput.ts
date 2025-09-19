import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationAreaEncounterRateCreateWithoutEncounterMethodInput } from "../inputs/LocationAreaEncounterRateCreateWithoutEncounterMethodInput";
import { LocationAreaEncounterRateWhereUniqueInput } from "../inputs/LocationAreaEncounterRateWhereUniqueInput";

@TypeGraphQL.InputType("LocationAreaEncounterRateCreateOrConnectWithoutEncounterMethodInput", {})
export class LocationAreaEncounterRateCreateOrConnectWithoutEncounterMethodInput {
  @TypeGraphQL.Field(_type => LocationAreaEncounterRateWhereUniqueInput, {
    nullable: false
  })
  where!: LocationAreaEncounterRateWhereUniqueInput;

  @TypeGraphQL.Field(_type => LocationAreaEncounterRateCreateWithoutEncounterMethodInput, {
    nullable: false
  })
  create!: LocationAreaEncounterRateCreateWithoutEncounterMethodInput;
}
