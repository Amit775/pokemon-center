import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterMethodsCreateWithoutSlotsInput } from "../inputs/EncounterMethodsCreateWithoutSlotsInput";
import { EncounterMethodsWhereUniqueInput } from "../inputs/EncounterMethodsWhereUniqueInput";

@TypeGraphQL.InputType("EncounterMethodsCreateOrConnectWithoutSlotsInput", {})
export class EncounterMethodsCreateOrConnectWithoutSlotsInput {
  @TypeGraphQL.Field(_type => EncounterMethodsWhereUniqueInput, {
    nullable: false
  })
  where!: EncounterMethodsWhereUniqueInput;

  @TypeGraphQL.Field(_type => EncounterMethodsCreateWithoutSlotsInput, {
    nullable: false
  })
  create!: EncounterMethodsCreateWithoutSlotsInput;
}
