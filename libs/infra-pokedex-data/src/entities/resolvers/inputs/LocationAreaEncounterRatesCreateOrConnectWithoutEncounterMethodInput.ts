import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationAreaEncounterRatesCreateWithoutEncounterMethodInput } from "../inputs/LocationAreaEncounterRatesCreateWithoutEncounterMethodInput";
import { LocationAreaEncounterRatesWhereUniqueInput } from "../inputs/LocationAreaEncounterRatesWhereUniqueInput";

@TypeGraphQL.InputType("LocationAreaEncounterRatesCreateOrConnectWithoutEncounterMethodInput", {})
export class LocationAreaEncounterRatesCreateOrConnectWithoutEncounterMethodInput {
  @TypeGraphQL.Field(_type => LocationAreaEncounterRatesWhereUniqueInput, {
    nullable: false
  })
  where!: LocationAreaEncounterRatesWhereUniqueInput;

  @TypeGraphQL.Field(_type => LocationAreaEncounterRatesCreateWithoutEncounterMethodInput, {
    nullable: false
  })
  create!: LocationAreaEncounterRatesCreateWithoutEncounterMethodInput;
}
