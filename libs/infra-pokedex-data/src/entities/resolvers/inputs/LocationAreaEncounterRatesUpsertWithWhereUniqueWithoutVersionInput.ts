import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationAreaEncounterRatesCreateWithoutVersionInput } from "../inputs/LocationAreaEncounterRatesCreateWithoutVersionInput";
import { LocationAreaEncounterRatesUpdateWithoutVersionInput } from "../inputs/LocationAreaEncounterRatesUpdateWithoutVersionInput";
import { LocationAreaEncounterRatesWhereUniqueInput } from "../inputs/LocationAreaEncounterRatesWhereUniqueInput";

@TypeGraphQL.InputType("LocationAreaEncounterRatesUpsertWithWhereUniqueWithoutVersionInput", {})
export class LocationAreaEncounterRatesUpsertWithWhereUniqueWithoutVersionInput {
  @TypeGraphQL.Field(_type => LocationAreaEncounterRatesWhereUniqueInput, {
    nullable: false
  })
  where!: LocationAreaEncounterRatesWhereUniqueInput;

  @TypeGraphQL.Field(_type => LocationAreaEncounterRatesUpdateWithoutVersionInput, {
    nullable: false
  })
  update!: LocationAreaEncounterRatesUpdateWithoutVersionInput;

  @TypeGraphQL.Field(_type => LocationAreaEncounterRatesCreateWithoutVersionInput, {
    nullable: false
  })
  create!: LocationAreaEncounterRatesCreateWithoutVersionInput;
}
