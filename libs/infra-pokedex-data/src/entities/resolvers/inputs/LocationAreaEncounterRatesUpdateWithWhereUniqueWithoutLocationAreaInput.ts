import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationAreaEncounterRatesUpdateWithoutLocationAreaInput } from "../inputs/LocationAreaEncounterRatesUpdateWithoutLocationAreaInput";
import { LocationAreaEncounterRatesWhereUniqueInput } from "../inputs/LocationAreaEncounterRatesWhereUniqueInput";

@TypeGraphQL.InputType("LocationAreaEncounterRatesUpdateWithWhereUniqueWithoutLocationAreaInput", {})
export class LocationAreaEncounterRatesUpdateWithWhereUniqueWithoutLocationAreaInput {
  @TypeGraphQL.Field(_type => LocationAreaEncounterRatesWhereUniqueInput, {
    nullable: false
  })
  where!: LocationAreaEncounterRatesWhereUniqueInput;

  @TypeGraphQL.Field(_type => LocationAreaEncounterRatesUpdateWithoutLocationAreaInput, {
    nullable: false
  })
  data!: LocationAreaEncounterRatesUpdateWithoutLocationAreaInput;
}
