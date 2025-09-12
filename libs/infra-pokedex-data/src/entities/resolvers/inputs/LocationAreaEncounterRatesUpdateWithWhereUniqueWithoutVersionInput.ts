import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationAreaEncounterRatesUpdateWithoutVersionInput } from "../inputs/LocationAreaEncounterRatesUpdateWithoutVersionInput";
import { LocationAreaEncounterRatesWhereUniqueInput } from "../inputs/LocationAreaEncounterRatesWhereUniqueInput";

@TypeGraphQL.InputType("LocationAreaEncounterRatesUpdateWithWhereUniqueWithoutVersionInput", {})
export class LocationAreaEncounterRatesUpdateWithWhereUniqueWithoutVersionInput {
  @TypeGraphQL.Field(_type => LocationAreaEncounterRatesWhereUniqueInput, {
    nullable: false
  })
  where!: LocationAreaEncounterRatesWhereUniqueInput;

  @TypeGraphQL.Field(_type => LocationAreaEncounterRatesUpdateWithoutVersionInput, {
    nullable: false
  })
  data!: LocationAreaEncounterRatesUpdateWithoutVersionInput;
}
