import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterMethodsCreateWithoutEncounterRatesInput } from "../inputs/EncounterMethodsCreateWithoutEncounterRatesInput";
import { EncounterMethodsWhereUniqueInput } from "../inputs/EncounterMethodsWhereUniqueInput";

@TypeGraphQL.InputType("EncounterMethodsCreateOrConnectWithoutEncounterRatesInput", {})
export class EncounterMethodsCreateOrConnectWithoutEncounterRatesInput {
  @TypeGraphQL.Field(_type => EncounterMethodsWhereUniqueInput, {
    nullable: false
  })
  where!: EncounterMethodsWhereUniqueInput;

  @TypeGraphQL.Field(_type => EncounterMethodsCreateWithoutEncounterRatesInput, {
    nullable: false
  })
  create!: EncounterMethodsCreateWithoutEncounterRatesInput;
}
