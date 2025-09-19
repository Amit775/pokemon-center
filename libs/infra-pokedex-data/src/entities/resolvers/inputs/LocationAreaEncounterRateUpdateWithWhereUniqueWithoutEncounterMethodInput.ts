import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationAreaEncounterRateUpdateWithoutEncounterMethodInput } from "../inputs/LocationAreaEncounterRateUpdateWithoutEncounterMethodInput";
import { LocationAreaEncounterRateWhereUniqueInput } from "../inputs/LocationAreaEncounterRateWhereUniqueInput";

@TypeGraphQL.InputType("LocationAreaEncounterRateUpdateWithWhereUniqueWithoutEncounterMethodInput", {})
export class LocationAreaEncounterRateUpdateWithWhereUniqueWithoutEncounterMethodInput {
  @TypeGraphQL.Field(_type => LocationAreaEncounterRateWhereUniqueInput, {
    nullable: false
  })
  where!: LocationAreaEncounterRateWhereUniqueInput;

  @TypeGraphQL.Field(_type => LocationAreaEncounterRateUpdateWithoutEncounterMethodInput, {
    nullable: false
  })
  data!: LocationAreaEncounterRateUpdateWithoutEncounterMethodInput;
}
