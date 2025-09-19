import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationAreaEncounterRateUpdateWithoutLocationAreaInput } from "../inputs/LocationAreaEncounterRateUpdateWithoutLocationAreaInput";
import { LocationAreaEncounterRateWhereUniqueInput } from "../inputs/LocationAreaEncounterRateWhereUniqueInput";

@TypeGraphQL.InputType("LocationAreaEncounterRateUpdateWithWhereUniqueWithoutLocationAreaInput", {})
export class LocationAreaEncounterRateUpdateWithWhereUniqueWithoutLocationAreaInput {
  @TypeGraphQL.Field(_type => LocationAreaEncounterRateWhereUniqueInput, {
    nullable: false
  })
  where!: LocationAreaEncounterRateWhereUniqueInput;

  @TypeGraphQL.Field(_type => LocationAreaEncounterRateUpdateWithoutLocationAreaInput, {
    nullable: false
  })
  data!: LocationAreaEncounterRateUpdateWithoutLocationAreaInput;
}
