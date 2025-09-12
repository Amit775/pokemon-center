import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationAreaEncounterRatesCreateNestedManyWithoutVersionInput } from "../inputs/LocationAreaEncounterRatesCreateNestedManyWithoutVersionInput";
import { PokemonGameIndicesCreateNestedManyWithoutVersionInput } from "../inputs/PokemonGameIndicesCreateNestedManyWithoutVersionInput";
import { PokemonItemsCreateNestedManyWithoutVersionInput } from "../inputs/PokemonItemsCreateNestedManyWithoutVersionInput";
import { VersionGroupsCreateNestedOneWithoutVersionsInput } from "../inputs/VersionGroupsCreateNestedOneWithoutVersionsInput";

@TypeGraphQL.InputType("VersionsCreateWithoutEncountersInput", {})
export class VersionsCreateWithoutEncountersInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identifier!: string;

  @TypeGraphQL.Field(_type => VersionGroupsCreateNestedOneWithoutVersionsInput, {
    nullable: false
  })
  versionGroup!: VersionGroupsCreateNestedOneWithoutVersionsInput;

  @TypeGraphQL.Field(_type => PokemonItemsCreateNestedManyWithoutVersionInput, {
    nullable: true
  })
  pokemonItems?: PokemonItemsCreateNestedManyWithoutVersionInput | undefined;

  @TypeGraphQL.Field(_type => PokemonGameIndicesCreateNestedManyWithoutVersionInput, {
    nullable: true
  })
  pokemonGameIndices?: PokemonGameIndicesCreateNestedManyWithoutVersionInput | undefined;

  @TypeGraphQL.Field(_type => LocationAreaEncounterRatesCreateNestedManyWithoutVersionInput, {
    nullable: true
  })
  locationAreaEncounterRates?: LocationAreaEncounterRatesCreateNestedManyWithoutVersionInput | undefined;
}
