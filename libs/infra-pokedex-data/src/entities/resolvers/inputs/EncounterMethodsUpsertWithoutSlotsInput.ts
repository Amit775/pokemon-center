import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterMethodsCreateWithoutSlotsInput } from "../inputs/EncounterMethodsCreateWithoutSlotsInput";
import { EncounterMethodsUpdateWithoutSlotsInput } from "../inputs/EncounterMethodsUpdateWithoutSlotsInput";
import { EncounterMethodsWhereInput } from "../inputs/EncounterMethodsWhereInput";

@TypeGraphQL.InputType("EncounterMethodsUpsertWithoutSlotsInput", {})
export class EncounterMethodsUpsertWithoutSlotsInput {
  @TypeGraphQL.Field(_type => EncounterMethodsUpdateWithoutSlotsInput, {
    nullable: false
  })
  update!: EncounterMethodsUpdateWithoutSlotsInput;

  @TypeGraphQL.Field(_type => EncounterMethodsCreateWithoutSlotsInput, {
    nullable: false
  })
  create!: EncounterMethodsCreateWithoutSlotsInput;

  @TypeGraphQL.Field(_type => EncounterMethodsWhereInput, {
    nullable: true
  })
  where?: EncounterMethodsWhereInput | undefined;
}
