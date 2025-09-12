import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterMethodsUpdateWithoutEncounterRatesInput } from "../inputs/EncounterMethodsUpdateWithoutEncounterRatesInput";
import { EncounterMethodsWhereInput } from "../inputs/EncounterMethodsWhereInput";

@TypeGraphQL.InputType("EncounterMethodsUpdateToOneWithWhereWithoutEncounterRatesInput", {})
export class EncounterMethodsUpdateToOneWithWhereWithoutEncounterRatesInput {
  @TypeGraphQL.Field(_type => EncounterMethodsWhereInput, {
    nullable: true
  })
  where?: EncounterMethodsWhereInput | undefined;

  @TypeGraphQL.Field(_type => EncounterMethodsUpdateWithoutEncounterRatesInput, {
    nullable: false
  })
  data!: EncounterMethodsUpdateWithoutEncounterRatesInput;
}
