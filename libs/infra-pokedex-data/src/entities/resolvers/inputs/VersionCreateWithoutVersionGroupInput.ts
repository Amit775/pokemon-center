import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterCreateNestedManyWithoutVersionInput } from "../inputs/EncounterCreateNestedManyWithoutVersionInput";
import { LocationAreaEncounterRateCreateNestedManyWithoutVersionInput } from "../inputs/LocationAreaEncounterRateCreateNestedManyWithoutVersionInput";
import { PokemonGameIndexCreateNestedManyWithoutVersionInput } from "../inputs/PokemonGameIndexCreateNestedManyWithoutVersionInput";
import { PokemonItemCreateNestedManyWithoutVersionInput } from "../inputs/PokemonItemCreateNestedManyWithoutVersionInput";

@TypeGraphQL.InputType("VersionCreateWithoutVersionGroupInput", {})
export class VersionCreateWithoutVersionGroupInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identifier!: string;

  @TypeGraphQL.Field(_type => EncounterCreateNestedManyWithoutVersionInput, {
    nullable: true
  })
  encounters?: EncounterCreateNestedManyWithoutVersionInput | undefined;

  @TypeGraphQL.Field(_type => PokemonItemCreateNestedManyWithoutVersionInput, {
    nullable: true
  })
  pokemonItems?: PokemonItemCreateNestedManyWithoutVersionInput | undefined;

  @TypeGraphQL.Field(_type => PokemonGameIndexCreateNestedManyWithoutVersionInput, {
    nullable: true
  })
  pokemonGameIndices?: PokemonGameIndexCreateNestedManyWithoutVersionInput | undefined;

  @TypeGraphQL.Field(_type => LocationAreaEncounterRateCreateNestedManyWithoutVersionInput, {
    nullable: true
  })
  locationAreaEncounterRates?: LocationAreaEncounterRateCreateNestedManyWithoutVersionInput | undefined;
}
