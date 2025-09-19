import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterSlotCreateWithoutEncounterMethodInput } from "../inputs/EncounterSlotCreateWithoutEncounterMethodInput";
import { EncounterSlotUpdateWithoutEncounterMethodInput } from "../inputs/EncounterSlotUpdateWithoutEncounterMethodInput";
import { EncounterSlotWhereUniqueInput } from "../inputs/EncounterSlotWhereUniqueInput";

@TypeGraphQL.InputType("EncounterSlotUpsertWithWhereUniqueWithoutEncounterMethodInput", {})
export class EncounterSlotUpsertWithWhereUniqueWithoutEncounterMethodInput {
  @TypeGraphQL.Field(_type => EncounterSlotWhereUniqueInput, {
    nullable: false
  })
  where!: EncounterSlotWhereUniqueInput;

  @TypeGraphQL.Field(_type => EncounterSlotUpdateWithoutEncounterMethodInput, {
    nullable: false
  })
  update!: EncounterSlotUpdateWithoutEncounterMethodInput;

  @TypeGraphQL.Field(_type => EncounterSlotCreateWithoutEncounterMethodInput, {
    nullable: false
  })
  create!: EncounterSlotCreateWithoutEncounterMethodInput;
}
