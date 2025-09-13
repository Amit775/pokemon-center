import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterConditionValueMapCreateNestedManyWithoutEncounterInput } from "../inputs/EncounterConditionValueMapCreateNestedManyWithoutEncounterInput";
import { EncounterSlotsCreateNestedOneWithoutEncountersInput } from "../inputs/EncounterSlotsCreateNestedOneWithoutEncountersInput";
import { PokemonCreateNestedOneWithoutEncountersInput } from "../inputs/PokemonCreateNestedOneWithoutEncountersInput";
import { VersionsCreateNestedOneWithoutEncountersInput } from "../inputs/VersionsCreateNestedOneWithoutEncountersInput";

@TypeGraphQL.InputType("EncountersCreateWithoutLocationAreaInput", {})
export class EncountersCreateWithoutLocationAreaInput {
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

  @TypeGraphQL.Field(_type => VersionsCreateNestedOneWithoutEncountersInput, {
    nullable: false
  })
  version!: VersionsCreateNestedOneWithoutEncountersInput;

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
