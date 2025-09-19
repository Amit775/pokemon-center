import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterSlotCreateNestedManyWithoutEncounterMethodInput } from "../inputs/EncounterSlotCreateNestedManyWithoutEncounterMethodInput";
import { LocationAreaEncounterRateCreateNestedManyWithoutEncounterMethodInput } from "../inputs/LocationAreaEncounterRateCreateNestedManyWithoutEncounterMethodInput";

@TypeGraphQL.InputType("EncounterMethodCreateInput", {})
export class EncounterMethodCreateInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identifier!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  order!: number;

  @TypeGraphQL.Field(_type => EncounterSlotCreateNestedManyWithoutEncounterMethodInput, {
    nullable: true
  })
  slots?: EncounterSlotCreateNestedManyWithoutEncounterMethodInput | undefined;

  @TypeGraphQL.Field(_type => LocationAreaEncounterRateCreateNestedManyWithoutEncounterMethodInput, {
    nullable: true
  })
  encounterRates?: LocationAreaEncounterRateCreateNestedManyWithoutEncounterMethodInput | undefined;
}
