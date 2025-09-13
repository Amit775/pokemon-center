import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationAreaEncounterRatesUpdateManyWithoutEncounterMethodNestedInput } from "../inputs/LocationAreaEncounterRatesUpdateManyWithoutEncounterMethodNestedInput";

@TypeGraphQL.InputType("EncounterMethodsUpdateWithoutSlotsInput", {})
export class EncounterMethodsUpdateWithoutSlotsInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  identifier?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  order?: number | undefined;

  @TypeGraphQL.Field(_type => LocationAreaEncounterRatesUpdateManyWithoutEncounterMethodNestedInput, {
    nullable: true
  })
  encounterRates?: LocationAreaEncounterRatesUpdateManyWithoutEncounterMethodNestedInput | undefined;
}
