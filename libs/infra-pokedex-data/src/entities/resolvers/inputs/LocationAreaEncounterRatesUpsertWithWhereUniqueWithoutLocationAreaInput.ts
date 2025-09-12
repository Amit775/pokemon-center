import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationAreaEncounterRatesCreateWithoutLocationAreaInput } from "../inputs/LocationAreaEncounterRatesCreateWithoutLocationAreaInput";
import { LocationAreaEncounterRatesUpdateWithoutLocationAreaInput } from "../inputs/LocationAreaEncounterRatesUpdateWithoutLocationAreaInput";
import { LocationAreaEncounterRatesWhereUniqueInput } from "../inputs/LocationAreaEncounterRatesWhereUniqueInput";

@TypeGraphQL.InputType("LocationAreaEncounterRatesUpsertWithWhereUniqueWithoutLocationAreaInput", {})
export class LocationAreaEncounterRatesUpsertWithWhereUniqueWithoutLocationAreaInput {
  @TypeGraphQL.Field(_type => LocationAreaEncounterRatesWhereUniqueInput, {
    nullable: false
  })
  where!: LocationAreaEncounterRatesWhereUniqueInput;

  @TypeGraphQL.Field(_type => LocationAreaEncounterRatesUpdateWithoutLocationAreaInput, {
    nullable: false
  })
  update!: LocationAreaEncounterRatesUpdateWithoutLocationAreaInput;

  @TypeGraphQL.Field(_type => LocationAreaEncounterRatesCreateWithoutLocationAreaInput, {
    nullable: false
  })
  create!: LocationAreaEncounterRatesCreateWithoutLocationAreaInput;
}
