import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncountersUpdateManyWithoutLocationAreaNestedInput } from "../inputs/EncountersUpdateManyWithoutLocationAreaNestedInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { LocationAreaEncounterRatesUpdateManyWithoutLocationAreaNestedInput } from "../inputs/LocationAreaEncounterRatesUpdateManyWithoutLocationAreaNestedInput";
import { LocationsUpdateOneRequiredWithoutAreasNestedInput } from "../inputs/LocationsUpdateOneRequiredWithoutAreasNestedInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("LocationAreasUpdateInput", {})
export class LocationAreasUpdateInput {
  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  game_index?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  identifier?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => LocationsUpdateOneRequiredWithoutAreasNestedInput, {
    nullable: true
  })
  location?: LocationsUpdateOneRequiredWithoutAreasNestedInput | undefined;

  @TypeGraphQL.Field(_type => EncountersUpdateManyWithoutLocationAreaNestedInput, {
    nullable: true
  })
  encounters?: EncountersUpdateManyWithoutLocationAreaNestedInput | undefined;

  @TypeGraphQL.Field(_type => LocationAreaEncounterRatesUpdateManyWithoutLocationAreaNestedInput, {
    nullable: true
  })
  encounterRates?: LocationAreaEncounterRatesUpdateManyWithoutLocationAreaNestedInput | undefined;
}
