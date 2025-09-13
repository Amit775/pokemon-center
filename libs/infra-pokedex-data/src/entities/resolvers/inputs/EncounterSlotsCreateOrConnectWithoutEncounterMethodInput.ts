import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterSlotsCreateWithoutEncounterMethodInput } from "../inputs/EncounterSlotsCreateWithoutEncounterMethodInput";
import { EncounterSlotsWhereUniqueInput } from "../inputs/EncounterSlotsWhereUniqueInput";

@TypeGraphQL.InputType("EncounterSlotsCreateOrConnectWithoutEncounterMethodInput", {})
export class EncounterSlotsCreateOrConnectWithoutEncounterMethodInput {
  @TypeGraphQL.Field(_type => EncounterSlotsWhereUniqueInput, {
    nullable: false
  })
  where!: EncounterSlotsWhereUniqueInput;

  @TypeGraphQL.Field(_type => EncounterSlotsCreateWithoutEncounterMethodInput, {
    nullable: false
  })
  create!: EncounterSlotsCreateWithoutEncounterMethodInput;
}
