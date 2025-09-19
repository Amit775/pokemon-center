import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterUpdateManyWithoutLocationAreaNestedInput } from "../inputs/EncounterUpdateManyWithoutLocationAreaNestedInput";
import { LocationAreaEncounterRateUpdateManyWithoutLocationAreaNestedInput } from "../inputs/LocationAreaEncounterRateUpdateManyWithoutLocationAreaNestedInput";
import { LocationUpdateOneRequiredWithoutAreasNestedInput } from "../inputs/LocationUpdateOneRequiredWithoutAreasNestedInput";

@TypeGraphQL.InputType("LocationAreaUpdateInput", {})
export class LocationAreaUpdateInput {
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

  @TypeGraphQL.Field(_type => LocationUpdateOneRequiredWithoutAreasNestedInput, {
    nullable: true
  })
  location?: LocationUpdateOneRequiredWithoutAreasNestedInput | undefined;

  @TypeGraphQL.Field(_type => EncounterUpdateManyWithoutLocationAreaNestedInput, {
    nullable: true
  })
  encounters?: EncounterUpdateManyWithoutLocationAreaNestedInput | undefined;

  @TypeGraphQL.Field(_type => LocationAreaEncounterRateUpdateManyWithoutLocationAreaNestedInput, {
    nullable: true
  })
  encounterRates?: LocationAreaEncounterRateUpdateManyWithoutLocationAreaNestedInput | undefined;
}
