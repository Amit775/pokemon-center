import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterConditionValueMapUpdateManyWithoutEncounterNestedInput } from "../inputs/EncounterConditionValueMapUpdateManyWithoutEncounterNestedInput";
import { EncounterSlotUpdateOneRequiredWithoutEncountersNestedInput } from "../inputs/EncounterSlotUpdateOneRequiredWithoutEncountersNestedInput";
import { LocationAreaUpdateOneRequiredWithoutEncountersNestedInput } from "../inputs/LocationAreaUpdateOneRequiredWithoutEncountersNestedInput";
import { VersionUpdateOneRequiredWithoutEncountersNestedInput } from "../inputs/VersionUpdateOneRequiredWithoutEncountersNestedInput";

@TypeGraphQL.InputType("EncounterUpdateWithoutPokemonInput", {})
export class EncounterUpdateWithoutPokemonInput {
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

  @TypeGraphQL.Field(_type => VersionUpdateOneRequiredWithoutEncountersNestedInput, {
    nullable: true
  })
  version?: VersionUpdateOneRequiredWithoutEncountersNestedInput | undefined;

  @TypeGraphQL.Field(_type => LocationAreaUpdateOneRequiredWithoutEncountersNestedInput, {
    nullable: true
  })
  locationArea?: LocationAreaUpdateOneRequiredWithoutEncountersNestedInput | undefined;

  @TypeGraphQL.Field(_type => EncounterSlotUpdateOneRequiredWithoutEncountersNestedInput, {
    nullable: true
  })
  encounterSlot?: EncounterSlotUpdateOneRequiredWithoutEncountersNestedInput | undefined;

  @TypeGraphQL.Field(_type => EncounterConditionValueMapUpdateManyWithoutEncounterNestedInput, {
    nullable: true
  })
  conditionValueMap?: EncounterConditionValueMapUpdateManyWithoutEncounterNestedInput | undefined;
}
