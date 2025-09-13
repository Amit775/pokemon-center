import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterConditionValueMapCreateNestedManyWithoutEncounterInput } from "../inputs/EncounterConditionValueMapCreateNestedManyWithoutEncounterInput";
import { EncounterSlotsCreateNestedOneWithoutEncountersInput } from "../inputs/EncounterSlotsCreateNestedOneWithoutEncountersInput";
import { LocationAreasCreateNestedOneWithoutEncountersInput } from "../inputs/LocationAreasCreateNestedOneWithoutEncountersInput";
import { PokemonCreateNestedOneWithoutEncountersInput } from "../inputs/PokemonCreateNestedOneWithoutEncountersInput";

@TypeGraphQL.InputType("EncountersCreateWithoutVersionInput", {})
export class EncountersCreateWithoutVersionInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  min_level!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  max_level!: number;

  @TypeGraphQL.Field(_type => LocationAreasCreateNestedOneWithoutEncountersInput, {
    nullable: false
  })
  locationArea!: LocationAreasCreateNestedOneWithoutEncountersInput;

  @TypeGraphQL.Field(_type => EncounterSlotsCreateNestedOneWithoutEncountersInput, {
    nullable: false
  })
  encounterSlot!: EncounterSlotsCreateNestedOneWithoutEncountersInput;

  @TypeGraphQL.Field(_type => PokemonCreateNestedOneWithoutEncountersInput, {
    nullable: false
  })
  pokemon!: PokemonCreateNestedOneWithoutEncountersInput;

  @TypeGraphQL.Field(_type => EncounterConditionValueMapCreateNestedManyWithoutEncounterInput, {
    nullable: true
  })
  conditionValueMap?: EncounterConditionValueMapCreateNestedManyWithoutEncounterInput | undefined;
}
