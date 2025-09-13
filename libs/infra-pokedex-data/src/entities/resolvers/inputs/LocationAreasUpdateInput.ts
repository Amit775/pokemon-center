import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncountersUpdateManyWithoutLocationAreaNestedInput } from "../inputs/EncountersUpdateManyWithoutLocationAreaNestedInput";
import { LocationAreaEncounterRatesUpdateManyWithoutLocationAreaNestedInput } from "../inputs/LocationAreaEncounterRatesUpdateManyWithoutLocationAreaNestedInput";
import { LocationsUpdateOneRequiredWithoutAreasNestedInput } from "../inputs/LocationsUpdateOneRequiredWithoutAreasNestedInput";

@TypeGraphQL.InputType("LocationAreasUpdateInput", {})
export class LocationAreasUpdateInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  game_index?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  identifier?: string | undefined;

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
