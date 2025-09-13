import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterSlotsCreateWithoutEncounterMethodInput } from "../inputs/EncounterSlotsCreateWithoutEncounterMethodInput";
import { EncounterSlotsUpdateWithoutEncounterMethodInput } from "../inputs/EncounterSlotsUpdateWithoutEncounterMethodInput";
import { EncounterSlotsWhereUniqueInput } from "../inputs/EncounterSlotsWhereUniqueInput";

@TypeGraphQL.InputType("EncounterSlotsUpsertWithWhereUniqueWithoutEncounterMethodInput", {})
export class EncounterSlotsUpsertWithWhereUniqueWithoutEncounterMethodInput {
  @TypeGraphQL.Field(_type => EncounterSlotsWhereUniqueInput, {
    nullable: false
  })
  where!: EncounterSlotsWhereUniqueInput;

  @TypeGraphQL.Field(_type => EncounterSlotsUpdateWithoutEncounterMethodInput, {
    nullable: false
  })
  update!: EncounterSlotsUpdateWithoutEncounterMethodInput;

  @TypeGraphQL.Field(_type => EncounterSlotsCreateWithoutEncounterMethodInput, {
    nullable: false
  })
  create!: EncounterSlotsCreateWithoutEncounterMethodInput;
}
