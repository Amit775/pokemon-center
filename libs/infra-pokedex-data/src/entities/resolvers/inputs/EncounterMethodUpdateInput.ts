import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterSlotUpdateManyWithoutEncounterMethodNestedInput } from "../inputs/EncounterSlotUpdateManyWithoutEncounterMethodNestedInput";
import { LocationAreaEncounterRateUpdateManyWithoutEncounterMethodNestedInput } from "../inputs/LocationAreaEncounterRateUpdateManyWithoutEncounterMethodNestedInput";

@TypeGraphQL.InputType("EncounterMethodUpdateInput", {})
export class EncounterMethodUpdateInput {
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

  @TypeGraphQL.Field(_type => EncounterSlotUpdateManyWithoutEncounterMethodNestedInput, {
    nullable: true
  })
  slots?: EncounterSlotUpdateManyWithoutEncounterMethodNestedInput | undefined;

  @TypeGraphQL.Field(_type => LocationAreaEncounterRateUpdateManyWithoutEncounterMethodNestedInput, {
    nullable: true
  })
  encounterRates?: LocationAreaEncounterRateUpdateManyWithoutEncounterMethodNestedInput | undefined;
}
