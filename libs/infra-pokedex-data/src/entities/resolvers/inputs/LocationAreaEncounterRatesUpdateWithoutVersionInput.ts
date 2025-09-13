import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterMethodsUpdateOneRequiredWithoutEncounterRatesNestedInput } from "../inputs/EncounterMethodsUpdateOneRequiredWithoutEncounterRatesNestedInput";
import { LocationAreasUpdateOneRequiredWithoutEncounterRatesNestedInput } from "../inputs/LocationAreasUpdateOneRequiredWithoutEncounterRatesNestedInput";

@TypeGraphQL.InputType("LocationAreaEncounterRatesUpdateWithoutVersionInput", {})
export class LocationAreaEncounterRatesUpdateWithoutVersionInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  rate?: number | undefined;

  @TypeGraphQL.Field(_type => LocationAreasUpdateOneRequiredWithoutEncounterRatesNestedInput, {
    nullable: true
  })
  locationArea?: LocationAreasUpdateOneRequiredWithoutEncounterRatesNestedInput | undefined;

  @TypeGraphQL.Field(_type => EncounterMethodsUpdateOneRequiredWithoutEncounterRatesNestedInput, {
    nullable: true
  })
  encounterMethod?: EncounterMethodsUpdateOneRequiredWithoutEncounterRatesNestedInput | undefined;
}
