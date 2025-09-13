import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterMethodsUpdateOneRequiredWithoutSlotsNestedInput } from "../inputs/EncounterMethodsUpdateOneRequiredWithoutSlotsNestedInput";
import { VersionGroupsUpdateOneRequiredWithoutEncounterSlotsNestedInput } from "../inputs/VersionGroupsUpdateOneRequiredWithoutEncounterSlotsNestedInput";

@TypeGraphQL.InputType("EncounterSlotsUpdateWithoutEncountersInput", {})
export class EncounterSlotsUpdateWithoutEncountersInput {
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

  @TypeGraphQL.Field(_type => VersionGroupsUpdateOneRequiredWithoutEncounterSlotsNestedInput, {
    nullable: true
  })
  versionGroup?: VersionGroupsUpdateOneRequiredWithoutEncounterSlotsNestedInput | undefined;

  @TypeGraphQL.Field(_type => EncounterMethodsUpdateOneRequiredWithoutSlotsNestedInput, {
    nullable: true
  })
  encounterMethod?: EncounterMethodsUpdateOneRequiredWithoutSlotsNestedInput | undefined;
}
