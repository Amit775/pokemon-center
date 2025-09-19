import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationAreaEncounterRateCreateNestedManyWithoutLocationAreaInput } from "../inputs/LocationAreaEncounterRateCreateNestedManyWithoutLocationAreaInput";
import { LocationCreateNestedOneWithoutAreasInput } from "../inputs/LocationCreateNestedOneWithoutAreasInput";

@TypeGraphQL.InputType("LocationAreaCreateWithoutEncountersInput", {})
export class LocationAreaCreateWithoutEncountersInput {
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

  @TypeGraphQL.Field(_type => LocationCreateNestedOneWithoutAreasInput, {
    nullable: false
  })
  location!: LocationCreateNestedOneWithoutAreasInput;

  @TypeGraphQL.Field(_type => LocationAreaEncounterRateCreateNestedManyWithoutLocationAreaInput, {
    nullable: true
  })
  encounterRates?: LocationAreaEncounterRateCreateNestedManyWithoutLocationAreaInput | undefined;
}
