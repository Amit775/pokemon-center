import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterMethodsCreateOrConnectWithoutSlotsInput } from "../inputs/EncounterMethodsCreateOrConnectWithoutSlotsInput";
import { EncounterMethodsCreateWithoutSlotsInput } from "../inputs/EncounterMethodsCreateWithoutSlotsInput";
import { EncounterMethodsWhereUniqueInput } from "../inputs/EncounterMethodsWhereUniqueInput";

@TypeGraphQL.InputType("EncounterMethodsCreateNestedOneWithoutSlotsInput", {})
export class EncounterMethodsCreateNestedOneWithoutSlotsInput {
  @TypeGraphQL.Field(_type => EncounterMethodsCreateWithoutSlotsInput, {
    nullable: true
  })
  create?: EncounterMethodsCreateWithoutSlotsInput | undefined;

  @TypeGraphQL.Field(_type => EncounterMethodsCreateOrConnectWithoutSlotsInput, {
    nullable: true
  })
  connectOrCreate?: EncounterMethodsCreateOrConnectWithoutSlotsInput | undefined;

  @TypeGraphQL.Field(_type => EncounterMethodsWhereUniqueInput, {
    nullable: true
  })
  connect?: EncounterMethodsWhereUniqueInput | undefined;
}
