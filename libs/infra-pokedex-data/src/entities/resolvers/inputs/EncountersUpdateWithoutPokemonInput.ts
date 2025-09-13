import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterConditionValueMapUpdateManyWithoutEncounterNestedInput } from "../inputs/EncounterConditionValueMapUpdateManyWithoutEncounterNestedInput";
import { EncounterSlotsUpdateOneRequiredWithoutEncountersNestedInput } from "../inputs/EncounterSlotsUpdateOneRequiredWithoutEncountersNestedInput";
import { LocationAreasUpdateOneRequiredWithoutEncountersNestedInput } from "../inputs/LocationAreasUpdateOneRequiredWithoutEncountersNestedInput";
import { VersionsUpdateOneRequiredWithoutEncountersNestedInput } from "../inputs/VersionsUpdateOneRequiredWithoutEncountersNestedInput";

@TypeGraphQL.InputType("EncountersUpdateWithoutPokemonInput", {})
export class EncountersUpdateWithoutPokemonInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  min_level?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  max_level?: number | undefined;

  @TypeGraphQL.Field(_type => VersionsUpdateOneRequiredWithoutEncountersNestedInput, {
    nullable: true
  })
  version?: VersionsUpdateOneRequiredWithoutEncountersNestedInput | undefined;

  @TypeGraphQL.Field(_type => LocationAreasUpdateOneRequiredWithoutEncountersNestedInput, {
    nullable: true
  })
  locationArea?: LocationAreasUpdateOneRequiredWithoutEncountersNestedInput | undefined;

  @TypeGraphQL.Field(_type => EncounterSlotsUpdateOneRequiredWithoutEncountersNestedInput, {
    nullable: true
  })
  encounterSlot?: EncounterSlotsUpdateOneRequiredWithoutEncountersNestedInput | undefined;

  @TypeGraphQL.Field(_type => EncounterConditionValueMapUpdateManyWithoutEncounterNestedInput, {
    nullable: true
  })
  conditionValueMap?: EncounterConditionValueMapUpdateManyWithoutEncounterNestedInput | undefined;
}
