import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterSlotsCreateNestedManyWithoutEncounterMethodInput } from "../inputs/EncounterSlotsCreateNestedManyWithoutEncounterMethodInput";
import { LocationAreaEncounterRatesCreateNestedManyWithoutEncounterMethodInput } from "../inputs/LocationAreaEncounterRatesCreateNestedManyWithoutEncounterMethodInput";

@TypeGraphQL.InputType("EncounterMethodsCreateInput", {})
export class EncounterMethodsCreateInput {
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

  @TypeGraphQL.Field(_type => EncounterSlotsCreateNestedManyWithoutEncounterMethodInput, {
    nullable: true
  })
  slots?: EncounterSlotsCreateNestedManyWithoutEncounterMethodInput | undefined;

  @TypeGraphQL.Field(_type => LocationAreaEncounterRatesCreateNestedManyWithoutEncounterMethodInput, {
    nullable: true
  })
  encounterRates?: LocationAreaEncounterRatesCreateNestedManyWithoutEncounterMethodInput | undefined;
}
