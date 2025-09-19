import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterSlotCreateNestedOneWithoutEncountersInput } from "../inputs/EncounterSlotCreateNestedOneWithoutEncountersInput";
import { LocationAreaCreateNestedOneWithoutEncountersInput } from "../inputs/LocationAreaCreateNestedOneWithoutEncountersInput";
import { PokemonCreateNestedOneWithoutEncountersInput } from "../inputs/PokemonCreateNestedOneWithoutEncountersInput";
import { VersionCreateNestedOneWithoutEncountersInput } from "../inputs/VersionCreateNestedOneWithoutEncountersInput";

@TypeGraphQL.InputType("EncounterCreateWithoutConditionValueMapInput", {})
export class EncounterCreateWithoutConditionValueMapInput {
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

  @TypeGraphQL.Field(_type => VersionCreateNestedOneWithoutEncountersInput, {
    nullable: false
  })
  version!: VersionCreateNestedOneWithoutEncountersInput;

  @TypeGraphQL.Field(_type => LocationAreaCreateNestedOneWithoutEncountersInput, {
    nullable: false
  })
  locationArea!: LocationAreaCreateNestedOneWithoutEncountersInput;

  @TypeGraphQL.Field(_type => EncounterSlotCreateNestedOneWithoutEncountersInput, {
    nullable: false
  })
  encounterSlot!: EncounterSlotCreateNestedOneWithoutEncountersInput;

  @TypeGraphQL.Field(_type => PokemonCreateNestedOneWithoutEncountersInput, {
    nullable: false
  })
  pokemon!: PokemonCreateNestedOneWithoutEncountersInput;
}
