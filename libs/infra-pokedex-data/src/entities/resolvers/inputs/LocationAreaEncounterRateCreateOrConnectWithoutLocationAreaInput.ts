import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationAreaEncounterRateCreateWithoutLocationAreaInput } from "../inputs/LocationAreaEncounterRateCreateWithoutLocationAreaInput";
import { LocationAreaEncounterRateWhereUniqueInput } from "../inputs/LocationAreaEncounterRateWhereUniqueInput";

@TypeGraphQL.InputType("LocationAreaEncounterRateCreateOrConnectWithoutLocationAreaInput", {})
export class LocationAreaEncounterRateCreateOrConnectWithoutLocationAreaInput {
  @TypeGraphQL.Field(_type => LocationAreaEncounterRateWhereUniqueInput, {
    nullable: false
  })
  where!: LocationAreaEncounterRateWhereUniqueInput;

  @TypeGraphQL.Field(_type => LocationAreaEncounterRateCreateWithoutLocationAreaInput, {
    nullable: false
  })
  create!: LocationAreaEncounterRateCreateWithoutLocationAreaInput;
}
