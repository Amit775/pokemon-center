import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationAreaEncounterRatesUpdateWithoutEncounterMethodInput } from "../inputs/LocationAreaEncounterRatesUpdateWithoutEncounterMethodInput";
import { LocationAreaEncounterRatesWhereUniqueInput } from "../inputs/LocationAreaEncounterRatesWhereUniqueInput";

@TypeGraphQL.InputType("LocationAreaEncounterRatesUpdateWithWhereUniqueWithoutEncounterMethodInput", {})
export class LocationAreaEncounterRatesUpdateWithWhereUniqueWithoutEncounterMethodInput {
  @TypeGraphQL.Field(_type => LocationAreaEncounterRatesWhereUniqueInput, {
    nullable: false
  })
  where!: LocationAreaEncounterRatesWhereUniqueInput;

  @TypeGraphQL.Field(_type => LocationAreaEncounterRatesUpdateWithoutEncounterMethodInput, {
    nullable: false
  })
  data!: LocationAreaEncounterRatesUpdateWithoutEncounterMethodInput;
}
