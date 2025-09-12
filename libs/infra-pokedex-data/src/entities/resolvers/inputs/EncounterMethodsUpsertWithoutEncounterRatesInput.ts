import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterMethodsCreateWithoutEncounterRatesInput } from "../inputs/EncounterMethodsCreateWithoutEncounterRatesInput";
import { EncounterMethodsUpdateWithoutEncounterRatesInput } from "../inputs/EncounterMethodsUpdateWithoutEncounterRatesInput";
import { EncounterMethodsWhereInput } from "../inputs/EncounterMethodsWhereInput";

@TypeGraphQL.InputType("EncounterMethodsUpsertWithoutEncounterRatesInput", {})
export class EncounterMethodsUpsertWithoutEncounterRatesInput {
  @TypeGraphQL.Field(_type => EncounterMethodsUpdateWithoutEncounterRatesInput, {
    nullable: false
  })
  update!: EncounterMethodsUpdateWithoutEncounterRatesInput;

  @TypeGraphQL.Field(_type => EncounterMethodsCreateWithoutEncounterRatesInput, {
    nullable: false
  })
  create!: EncounterMethodsCreateWithoutEncounterRatesInput;

  @TypeGraphQL.Field(_type => EncounterMethodsWhereInput, {
    nullable: true
  })
  where?: EncounterMethodsWhereInput | undefined;
}
