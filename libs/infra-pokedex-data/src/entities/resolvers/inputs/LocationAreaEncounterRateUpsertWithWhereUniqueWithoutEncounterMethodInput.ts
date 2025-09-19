import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationAreaEncounterRateCreateWithoutEncounterMethodInput } from "../inputs/LocationAreaEncounterRateCreateWithoutEncounterMethodInput";
import { LocationAreaEncounterRateUpdateWithoutEncounterMethodInput } from "../inputs/LocationAreaEncounterRateUpdateWithoutEncounterMethodInput";
import { LocationAreaEncounterRateWhereUniqueInput } from "../inputs/LocationAreaEncounterRateWhereUniqueInput";

@TypeGraphQL.InputType("LocationAreaEncounterRateUpsertWithWhereUniqueWithoutEncounterMethodInput", {})
export class LocationAreaEncounterRateUpsertWithWhereUniqueWithoutEncounterMethodInput {
  @TypeGraphQL.Field(_type => LocationAreaEncounterRateWhereUniqueInput, {
    nullable: false
  })
  where!: LocationAreaEncounterRateWhereUniqueInput;

  @TypeGraphQL.Field(_type => LocationAreaEncounterRateUpdateWithoutEncounterMethodInput, {
    nullable: false
  })
  update!: LocationAreaEncounterRateUpdateWithoutEncounterMethodInput;

  @TypeGraphQL.Field(_type => LocationAreaEncounterRateCreateWithoutEncounterMethodInput, {
    nullable: false
  })
  create!: LocationAreaEncounterRateCreateWithoutEncounterMethodInput;
}
