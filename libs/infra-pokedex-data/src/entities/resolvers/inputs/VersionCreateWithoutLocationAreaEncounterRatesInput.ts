import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterCreateNestedManyWithoutVersionInput } from "../inputs/EncounterCreateNestedManyWithoutVersionInput";
import { PokemonGameIndexCreateNestedManyWithoutVersionInput } from "../inputs/PokemonGameIndexCreateNestedManyWithoutVersionInput";
import { PokemonItemCreateNestedManyWithoutVersionInput } from "../inputs/PokemonItemCreateNestedManyWithoutVersionInput";
import { VersionGroupCreateNestedOneWithoutVersionsInput } from "../inputs/VersionGroupCreateNestedOneWithoutVersionsInput";

@TypeGraphQL.InputType("VersionCreateWithoutLocationAreaEncounterRatesInput", {})
export class VersionCreateWithoutLocationAreaEncounterRatesInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identifier!: string;

  @TypeGraphQL.Field(_type => VersionGroupCreateNestedOneWithoutVersionsInput, {
    nullable: false
  })
  versionGroup!: VersionGroupCreateNestedOneWithoutVersionsInput;

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
}
