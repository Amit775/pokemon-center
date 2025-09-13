import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncountersCreateNestedManyWithoutLocationAreaInput } from "../inputs/EncountersCreateNestedManyWithoutLocationAreaInput";
import { LocationsCreateNestedOneWithoutAreasInput } from "../inputs/LocationsCreateNestedOneWithoutAreasInput";

@TypeGraphQL.InputType("LocationAreasCreateWithoutEncounterRatesInput", {})
export class LocationAreasCreateWithoutEncounterRatesInput {
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

  @TypeGraphQL.Field(_type => LocationsCreateNestedOneWithoutAreasInput, {
    nullable: false
  })
  location!: LocationsCreateNestedOneWithoutAreasInput;

  @TypeGraphQL.Field(_type => EncountersCreateNestedManyWithoutLocationAreaInput, {
    nullable: true
  })
  encounters?: EncountersCreateNestedManyWithoutLocationAreaInput | undefined;
}
