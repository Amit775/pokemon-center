import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterUpdateManyWithoutEncounterSlotNestedInput } from "../inputs/EncounterUpdateManyWithoutEncounterSlotNestedInput";
import { VersionGroupUpdateOneRequiredWithoutEncounterSlotsNestedInput } from "../inputs/VersionGroupUpdateOneRequiredWithoutEncounterSlotsNestedInput";

@TypeGraphQL.InputType("EncounterSlotUpdateWithoutEncounterMethodInput", {})
export class EncounterSlotUpdateWithoutEncounterMethodInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  slot?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  rarity?: number | undefined;

  @TypeGraphQL.Field(_type => VersionGroupUpdateOneRequiredWithoutEncounterSlotsNestedInput, {
    nullable: true
  })
  versionGroup?: VersionGroupUpdateOneRequiredWithoutEncounterSlotsNestedInput | undefined;

  @TypeGraphQL.Field(_type => EncounterUpdateManyWithoutEncounterSlotNestedInput, {
    nullable: true
  })
  encounters?: EncounterUpdateManyWithoutEncounterSlotNestedInput | undefined;
}
