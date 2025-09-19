import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterSlotCreateWithoutEncounterMethodInput } from "../inputs/EncounterSlotCreateWithoutEncounterMethodInput";
import { EncounterSlotWhereUniqueInput } from "../inputs/EncounterSlotWhereUniqueInput";

@TypeGraphQL.InputType("EncounterSlotCreateOrConnectWithoutEncounterMethodInput", {})
export class EncounterSlotCreateOrConnectWithoutEncounterMethodInput {
  @TypeGraphQL.Field(_type => EncounterSlotWhereUniqueInput, {
    nullable: false
  })
  where!: EncounterSlotWhereUniqueInput;

  @TypeGraphQL.Field(_type => EncounterSlotCreateWithoutEncounterMethodInput, {
    nullable: false
  })
  create!: EncounterSlotCreateWithoutEncounterMethodInput;
}
