import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterSlotsUpdateManyWithoutEncounterMethodNestedInput } from "../inputs/EncounterSlotsUpdateManyWithoutEncounterMethodNestedInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { LocationAreaEncounterRatesUpdateManyWithoutEncounterMethodNestedInput } from "../inputs/LocationAreaEncounterRatesUpdateManyWithoutEncounterMethodNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("EncounterMethodsUpdateInput", {})
export class EncounterMethodsUpdateInput {
  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  identifier?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  order?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EncounterSlotsUpdateManyWithoutEncounterMethodNestedInput, {
    nullable: true
  })
  slots?: EncounterSlotsUpdateManyWithoutEncounterMethodNestedInput | undefined;

  @TypeGraphQL.Field(_type => LocationAreaEncounterRatesUpdateManyWithoutEncounterMethodNestedInput, {
    nullable: true
  })
  encounterRates?: LocationAreaEncounterRatesUpdateManyWithoutEncounterMethodNestedInput | undefined;
}
