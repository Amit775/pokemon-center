import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterSlotsUpdateWithoutEncounterMethodInput } from "../inputs/EncounterSlotsUpdateWithoutEncounterMethodInput";
import { EncounterSlotsWhereUniqueInput } from "../inputs/EncounterSlotsWhereUniqueInput";

@TypeGraphQL.InputType("EncounterSlotsUpdateWithWhereUniqueWithoutEncounterMethodInput", {})
export class EncounterSlotsUpdateWithWhereUniqueWithoutEncounterMethodInput {
  @TypeGraphQL.Field(_type => EncounterSlotsWhereUniqueInput, {
    nullable: false
  })
  where!: EncounterSlotsWhereUniqueInput;

  @TypeGraphQL.Field(_type => EncounterSlotsUpdateWithoutEncounterMethodInput, {
    nullable: false
  })
  data!: EncounterSlotsUpdateWithoutEncounterMethodInput;
}
