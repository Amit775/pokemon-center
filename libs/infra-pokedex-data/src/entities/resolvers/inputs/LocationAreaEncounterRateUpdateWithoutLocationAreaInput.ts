import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterMethodUpdateOneRequiredWithoutEncounterRatesNestedInput } from "../inputs/EncounterMethodUpdateOneRequiredWithoutEncounterRatesNestedInput";
import { VersionUpdateOneRequiredWithoutLocationAreaEncounterRatesNestedInput } from "../inputs/VersionUpdateOneRequiredWithoutLocationAreaEncounterRatesNestedInput";

@TypeGraphQL.InputType("LocationAreaEncounterRateUpdateWithoutLocationAreaInput", {})
export class LocationAreaEncounterRateUpdateWithoutLocationAreaInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  rate?: number | undefined;

  @TypeGraphQL.Field(_type => EncounterMethodUpdateOneRequiredWithoutEncounterRatesNestedInput, {
    nullable: true
  })
  encounterMethod?: EncounterMethodUpdateOneRequiredWithoutEncounterRatesNestedInput | undefined;

  @TypeGraphQL.Field(_type => VersionUpdateOneRequiredWithoutLocationAreaEncounterRatesNestedInput, {
    nullable: true
  })
  version?: VersionUpdateOneRequiredWithoutLocationAreaEncounterRatesNestedInput | undefined;
}
