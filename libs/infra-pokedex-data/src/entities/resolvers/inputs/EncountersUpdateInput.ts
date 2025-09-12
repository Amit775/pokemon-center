import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterConditionValueMapUpdateManyWithoutEncounterNestedInput } from "../inputs/EncounterConditionValueMapUpdateManyWithoutEncounterNestedInput";
import { EncounterSlotsUpdateOneRequiredWithoutEncountersNestedInput } from "../inputs/EncounterSlotsUpdateOneRequiredWithoutEncountersNestedInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { LocationAreasUpdateOneRequiredWithoutEncountersNestedInput } from "../inputs/LocationAreasUpdateOneRequiredWithoutEncountersNestedInput";
import { PokemonUpdateOneRequiredWithoutEncountersNestedInput } from "../inputs/PokemonUpdateOneRequiredWithoutEncountersNestedInput";
import { VersionsUpdateOneRequiredWithoutEncountersNestedInput } from "../inputs/VersionsUpdateOneRequiredWithoutEncountersNestedInput";

@TypeGraphQL.InputType("EncountersUpdateInput", {})
export class EncountersUpdateInput {
  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  min_level?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  max_level?: IntFieldUpdateOperationsInput | undefined;

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

  @TypeGraphQL.Field(_type => PokemonUpdateOneRequiredWithoutEncountersNestedInput, {
    nullable: true
  })
  pokemon?: PokemonUpdateOneRequiredWithoutEncountersNestedInput | undefined;

  @TypeGraphQL.Field(_type => EncounterConditionValueMapUpdateManyWithoutEncounterNestedInput, {
    nullable: true
  })
  conditionValueMap?: EncounterConditionValueMapUpdateManyWithoutEncounterNestedInput | undefined;
}
