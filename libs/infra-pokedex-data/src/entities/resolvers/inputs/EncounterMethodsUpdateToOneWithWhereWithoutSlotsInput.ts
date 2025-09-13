import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterMethodsUpdateWithoutSlotsInput } from "../inputs/EncounterMethodsUpdateWithoutSlotsInput";
import { EncounterMethodsWhereInput } from "../inputs/EncounterMethodsWhereInput";

@TypeGraphQL.InputType("EncounterMethodsUpdateToOneWithWhereWithoutSlotsInput", {})
export class EncounterMethodsUpdateToOneWithWhereWithoutSlotsInput {
  @TypeGraphQL.Field(_type => EncounterMethodsWhereInput, {
    nullable: true
  })
  where?: EncounterMethodsWhereInput | undefined;

  @TypeGraphQL.Field(_type => EncounterMethodsUpdateWithoutSlotsInput, {
    nullable: false
  })
  data!: EncounterMethodsUpdateWithoutSlotsInput;
}
