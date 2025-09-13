import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationAreaEncounterRatesCreateWithoutEncounterMethodInput } from "../inputs/LocationAreaEncounterRatesCreateWithoutEncounterMethodInput";
import { LocationAreaEncounterRatesUpdateWithoutEncounterMethodInput } from "../inputs/LocationAreaEncounterRatesUpdateWithoutEncounterMethodInput";
import { LocationAreaEncounterRatesWhereUniqueInput } from "../inputs/LocationAreaEncounterRatesWhereUniqueInput";

@TypeGraphQL.InputType("LocationAreaEncounterRatesUpsertWithWhereUniqueWithoutEncounterMethodInput", {})
export class LocationAreaEncounterRatesUpsertWithWhereUniqueWithoutEncounterMethodInput {
  @TypeGraphQL.Field(_type => LocationAreaEncounterRatesWhereUniqueInput, {
    nullable: false
  })
  where!: LocationAreaEncounterRatesWhereUniqueInput;

  @TypeGraphQL.Field(_type => LocationAreaEncounterRatesUpdateWithoutEncounterMethodInput, {
    nullable: false
  })
  update!: LocationAreaEncounterRatesUpdateWithoutEncounterMethodInput;

  @TypeGraphQL.Field(_type => LocationAreaEncounterRatesCreateWithoutEncounterMethodInput, {
    nullable: false
  })
  create!: LocationAreaEncounterRatesCreateWithoutEncounterMethodInput;
}
