import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterCreateNestedManyWithoutLocationAreaInput } from "../inputs/EncounterCreateNestedManyWithoutLocationAreaInput";
import { LocationAreaEncounterRateCreateNestedManyWithoutLocationAreaInput } from "../inputs/LocationAreaEncounterRateCreateNestedManyWithoutLocationAreaInput";

@TypeGraphQL.InputType("LocationAreaCreateWithoutLocationInput", {})
export class LocationAreaCreateWithoutLocationInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  game_index!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  identifier?: string | undefined;

  @TypeGraphQL.Field(_type => EncounterCreateNestedManyWithoutLocationAreaInput, {
    nullable: true
  })
  encounters?: EncounterCreateNestedManyWithoutLocationAreaInput | undefined;

  @TypeGraphQL.Field(_type => LocationAreaEncounterRateCreateNestedManyWithoutLocationAreaInput, {
    nullable: true
  })
  encounterRates?: LocationAreaEncounterRateCreateNestedManyWithoutLocationAreaInput | undefined;
}
