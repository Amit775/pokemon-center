import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { LocationAreasUpdateOneRequiredWithoutEncounterRatesNestedInput } from "../inputs/LocationAreasUpdateOneRequiredWithoutEncounterRatesNestedInput";
import { VersionsUpdateOneRequiredWithoutLocationAreaEncounterRatesNestedInput } from "../inputs/VersionsUpdateOneRequiredWithoutLocationAreaEncounterRatesNestedInput";

@TypeGraphQL.InputType("LocationAreaEncounterRatesUpdateWithoutEncounterMethodInput", {})
export class LocationAreaEncounterRatesUpdateWithoutEncounterMethodInput {
  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  rate?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => LocationAreasUpdateOneRequiredWithoutEncounterRatesNestedInput, {
    nullable: true
  })
  locationArea?: LocationAreasUpdateOneRequiredWithoutEncounterRatesNestedInput | undefined;

  @TypeGraphQL.Field(_type => VersionsUpdateOneRequiredWithoutLocationAreaEncounterRatesNestedInput, {
    nullable: true
  })
  version?: VersionsUpdateOneRequiredWithoutLocationAreaEncounterRatesNestedInput | undefined;
}
