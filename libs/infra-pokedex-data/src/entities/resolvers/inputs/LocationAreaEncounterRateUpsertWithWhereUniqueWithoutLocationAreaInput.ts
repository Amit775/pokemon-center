import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationAreaEncounterRateCreateWithoutLocationAreaInput } from "../inputs/LocationAreaEncounterRateCreateWithoutLocationAreaInput";
import { LocationAreaEncounterRateUpdateWithoutLocationAreaInput } from "../inputs/LocationAreaEncounterRateUpdateWithoutLocationAreaInput";
import { LocationAreaEncounterRateWhereUniqueInput } from "../inputs/LocationAreaEncounterRateWhereUniqueInput";

@TypeGraphQL.InputType("LocationAreaEncounterRateUpsertWithWhereUniqueWithoutLocationAreaInput", {})
export class LocationAreaEncounterRateUpsertWithWhereUniqueWithoutLocationAreaInput {
  @TypeGraphQL.Field(_type => LocationAreaEncounterRateWhereUniqueInput, {
    nullable: false
  })
  where!: LocationAreaEncounterRateWhereUniqueInput;

  @TypeGraphQL.Field(_type => LocationAreaEncounterRateUpdateWithoutLocationAreaInput, {
    nullable: false
  })
  update!: LocationAreaEncounterRateUpdateWithoutLocationAreaInput;

  @TypeGraphQL.Field(_type => LocationAreaEncounterRateCreateWithoutLocationAreaInput, {
    nullable: false
  })
  create!: LocationAreaEncounterRateCreateWithoutLocationAreaInput;
}
