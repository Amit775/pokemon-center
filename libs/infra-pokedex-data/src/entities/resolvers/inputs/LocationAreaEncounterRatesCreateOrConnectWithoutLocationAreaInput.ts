import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationAreaEncounterRatesCreateWithoutLocationAreaInput } from "../inputs/LocationAreaEncounterRatesCreateWithoutLocationAreaInput";
import { LocationAreaEncounterRatesWhereUniqueInput } from "../inputs/LocationAreaEncounterRatesWhereUniqueInput";

@TypeGraphQL.InputType("LocationAreaEncounterRatesCreateOrConnectWithoutLocationAreaInput", {})
export class LocationAreaEncounterRatesCreateOrConnectWithoutLocationAreaInput {
  @TypeGraphQL.Field(_type => LocationAreaEncounterRatesWhereUniqueInput, {
    nullable: false
  })
  where!: LocationAreaEncounterRatesWhereUniqueInput;

  @TypeGraphQL.Field(_type => LocationAreaEncounterRatesCreateWithoutLocationAreaInput, {
    nullable: false
  })
  create!: LocationAreaEncounterRatesCreateWithoutLocationAreaInput;
}
