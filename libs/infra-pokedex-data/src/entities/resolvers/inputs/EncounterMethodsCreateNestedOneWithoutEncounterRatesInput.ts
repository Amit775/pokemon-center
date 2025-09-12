import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterMethodsCreateOrConnectWithoutEncounterRatesInput } from "../inputs/EncounterMethodsCreateOrConnectWithoutEncounterRatesInput";
import { EncounterMethodsCreateWithoutEncounterRatesInput } from "../inputs/EncounterMethodsCreateWithoutEncounterRatesInput";
import { EncounterMethodsWhereUniqueInput } from "../inputs/EncounterMethodsWhereUniqueInput";

@TypeGraphQL.InputType("EncounterMethodsCreateNestedOneWithoutEncounterRatesInput", {})
export class EncounterMethodsCreateNestedOneWithoutEncounterRatesInput {
  @TypeGraphQL.Field(_type => EncounterMethodsCreateWithoutEncounterRatesInput, {
    nullable: true
  })
  create?: EncounterMethodsCreateWithoutEncounterRatesInput | undefined;

  @TypeGraphQL.Field(_type => EncounterMethodsCreateOrConnectWithoutEncounterRatesInput, {
    nullable: true
  })
  connectOrCreate?: EncounterMethodsCreateOrConnectWithoutEncounterRatesInput | undefined;

  @TypeGraphQL.Field(_type => EncounterMethodsWhereUniqueInput, {
    nullable: true
  })
  connect?: EncounterMethodsWhereUniqueInput | undefined;
}
