import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterCreateNestedManyWithoutEncounterSlotInput } from "../inputs/EncounterCreateNestedManyWithoutEncounterSlotInput";
import { VersionGroupCreateNestedOneWithoutEncounterSlotsInput } from "../inputs/VersionGroupCreateNestedOneWithoutEncounterSlotsInput";

@TypeGraphQL.InputType("EncounterSlotCreateWithoutEncounterMethodInput", {})
export class EncounterSlotCreateWithoutEncounterMethodInput {
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

  @TypeGraphQL.Field(_type => VersionGroupCreateNestedOneWithoutEncounterSlotsInput, {
    nullable: false
  })
  versionGroup!: VersionGroupCreateNestedOneWithoutEncounterSlotsInput;

  @TypeGraphQL.Field(_type => EncounterCreateNestedManyWithoutEncounterSlotInput, {
    nullable: true
  })
  encounters?: EncounterCreateNestedManyWithoutEncounterSlotInput | undefined;
}
