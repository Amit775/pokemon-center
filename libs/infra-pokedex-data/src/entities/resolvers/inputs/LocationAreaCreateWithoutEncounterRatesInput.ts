import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterCreateNestedManyWithoutLocationAreaInput } from "../inputs/EncounterCreateNestedManyWithoutLocationAreaInput";
import { LocationCreateNestedOneWithoutAreasInput } from "../inputs/LocationCreateNestedOneWithoutAreasInput";

@TypeGraphQL.InputType("LocationAreaCreateWithoutEncounterRatesInput", {})
export class LocationAreaCreateWithoutEncounterRatesInput {
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

  @TypeGraphQL.Field(_type => EncounterCreateNestedManyWithoutLocationAreaInput, {
    nullable: true
  })
  encounters?: EncounterCreateNestedManyWithoutLocationAreaInput | undefined;
}
