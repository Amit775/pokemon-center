import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationAreasUpdateOneRequiredWithoutEncounterRatesNestedInput } from "../inputs/LocationAreasUpdateOneRequiredWithoutEncounterRatesNestedInput";
import { VersionsUpdateOneRequiredWithoutLocationAreaEncounterRatesNestedInput } from "../inputs/VersionsUpdateOneRequiredWithoutLocationAreaEncounterRatesNestedInput";

@TypeGraphQL.InputType("LocationAreaEncounterRatesUpdateWithoutEncounterMethodInput", {})
export class LocationAreaEncounterRatesUpdateWithoutEncounterMethodInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  rate?: number | undefined;

  @TypeGraphQL.Field(_type => LocationAreasUpdateOneRequiredWithoutEncounterRatesNestedInput, {
    nullable: true
  })
  locationArea?: LocationAreasUpdateOneRequiredWithoutEncounterRatesNestedInput | undefined;

  @TypeGraphQL.Field(_type => VersionsUpdateOneRequiredWithoutLocationAreaEncounterRatesNestedInput, {
    nullable: true
  })
  version?: VersionsUpdateOneRequiredWithoutLocationAreaEncounterRatesNestedInput | undefined;
}
