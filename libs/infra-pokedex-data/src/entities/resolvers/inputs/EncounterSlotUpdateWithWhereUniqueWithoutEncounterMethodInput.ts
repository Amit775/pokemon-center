import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterSlotUpdateWithoutEncounterMethodInput } from "../inputs/EncounterSlotUpdateWithoutEncounterMethodInput";
import { EncounterSlotWhereUniqueInput } from "../inputs/EncounterSlotWhereUniqueInput";

@TypeGraphQL.InputType("EncounterSlotUpdateWithWhereUniqueWithoutEncounterMethodInput", {})
export class EncounterSlotUpdateWithWhereUniqueWithoutEncounterMethodInput {
  @TypeGraphQL.Field(_type => EncounterSlotWhereUniqueInput, {
    nullable: false
  })
  where!: EncounterSlotWhereUniqueInput;

  @TypeGraphQL.Field(_type => EncounterSlotUpdateWithoutEncounterMethodInput, {
    nullable: false
  })
  data!: EncounterSlotUpdateWithoutEncounterMethodInput;
}
