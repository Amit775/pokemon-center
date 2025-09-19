import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterMethodUpdateOneRequiredWithoutSlotsNestedInput } from "../inputs/EncounterMethodUpdateOneRequiredWithoutSlotsNestedInput";
import { VersionGroupUpdateOneRequiredWithoutEncounterSlotsNestedInput } from "../inputs/VersionGroupUpdateOneRequiredWithoutEncounterSlotsNestedInput";

@TypeGraphQL.InputType("EncounterSlotUpdateWithoutEncountersInput", {})
export class EncounterSlotUpdateWithoutEncountersInput {
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

  @TypeGraphQL.Field(_type => EncounterMethodUpdateOneRequiredWithoutSlotsNestedInput, {
    nullable: true
  })
  encounterMethod?: EncounterMethodUpdateOneRequiredWithoutSlotsNestedInput | undefined;
}
