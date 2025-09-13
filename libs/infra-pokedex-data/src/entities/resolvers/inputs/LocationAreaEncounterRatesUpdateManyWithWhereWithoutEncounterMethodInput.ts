import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationAreaEncounterRatesScalarWhereInput } from "../inputs/LocationAreaEncounterRatesScalarWhereInput";
import { LocationAreaEncounterRatesUpdateManyMutationInput } from "../inputs/LocationAreaEncounterRatesUpdateManyMutationInput";

@TypeGraphQL.InputType("LocationAreaEncounterRatesUpdateManyWithWhereWithoutEncounterMethodInput", {})
export class LocationAreaEncounterRatesUpdateManyWithWhereWithoutEncounterMethodInput {
  @TypeGraphQL.Field(_type => LocationAreaEncounterRatesScalarWhereInput, {
    nullable: false
  })
  where!: LocationAreaEncounterRatesScalarWhereInput;

  @TypeGraphQL.Field(_type => LocationAreaEncounterRatesUpdateManyMutationInput, {
    nullable: false
  })
  data!: LocationAreaEncounterRatesUpdateManyMutationInput;
}
