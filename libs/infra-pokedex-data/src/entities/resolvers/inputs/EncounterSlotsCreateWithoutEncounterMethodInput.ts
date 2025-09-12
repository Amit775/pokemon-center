import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncountersCreateNestedManyWithoutEncounterSlotInput } from "../inputs/EncountersCreateNestedManyWithoutEncounterSlotInput";
import { VersionGroupsCreateNestedOneWithoutEncounterSlotsInput } from "../inputs/VersionGroupsCreateNestedOneWithoutEncounterSlotsInput";

@TypeGraphQL.InputType("EncounterSlotsCreateWithoutEncounterMethodInput", {})
export class EncounterSlotsCreateWithoutEncounterMethodInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  slot?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  rarity!: number;

  @TypeGraphQL.Field(_type => VersionGroupsCreateNestedOneWithoutEncounterSlotsInput, {
    nullable: false
  })
  versionGroup!: VersionGroupsCreateNestedOneWithoutEncounterSlotsInput;

  @TypeGraphQL.Field(_type => EncountersCreateNestedManyWithoutEncounterSlotInput, {
    nullable: true
  })
  encounters?: EncountersCreateNestedManyWithoutEncounterSlotInput | undefined;
}
