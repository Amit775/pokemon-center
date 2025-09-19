import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterMethodUpdateOneRequiredWithoutEncounterRatesNestedInput } from "../inputs/EncounterMethodUpdateOneRequiredWithoutEncounterRatesNestedInput";
import { LocationAreaUpdateOneRequiredWithoutEncounterRatesNestedInput } from "../inputs/LocationAreaUpdateOneRequiredWithoutEncounterRatesNestedInput";

@TypeGraphQL.InputType("LocationAreaEncounterRateUpdateWithoutVersionInput", {})
export class LocationAreaEncounterRateUpdateWithoutVersionInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  rate?: number | undefined;

  @TypeGraphQL.Field(_type => LocationAreaUpdateOneRequiredWithoutEncounterRatesNestedInput, {
    nullable: true
  })
  locationArea?: LocationAreaUpdateOneRequiredWithoutEncounterRatesNestedInput | undefined;

  @TypeGraphQL.Field(_type => EncounterMethodUpdateOneRequiredWithoutEncounterRatesNestedInput, {
    nullable: true
  })
  encounterMethod?: EncounterMethodUpdateOneRequiredWithoutEncounterRatesNestedInput | undefined;
}
