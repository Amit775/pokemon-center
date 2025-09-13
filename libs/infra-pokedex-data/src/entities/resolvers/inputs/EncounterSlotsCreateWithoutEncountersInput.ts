import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterMethodsCreateNestedOneWithoutSlotsInput } from "../inputs/EncounterMethodsCreateNestedOneWithoutSlotsInput";
import { VersionGroupsCreateNestedOneWithoutEncounterSlotsInput } from "../inputs/VersionGroupsCreateNestedOneWithoutEncounterSlotsInput";

@TypeGraphQL.InputType("EncounterSlotsCreateWithoutEncountersInput", {})
export class EncounterSlotsCreateWithoutEncountersInput {
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

  @TypeGraphQL.Field(_type => EncounterMethodsCreateNestedOneWithoutSlotsInput, {
    nullable: false
  })
  encounterMethod!: EncounterMethodsCreateNestedOneWithoutSlotsInput;
}
