import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterSlotsCreateNestedManyWithoutVersionGroupInput } from "../inputs/EncounterSlotsCreateNestedManyWithoutVersionGroupInput";
import { MachinesCreateNestedManyWithoutVersionGroupInput } from "../inputs/MachinesCreateNestedManyWithoutVersionGroupInput";
import { PokedexVersionGroupsCreateNestedManyWithoutVersionGroupInput } from "../inputs/PokedexVersionGroupsCreateNestedManyWithoutVersionGroupInput";
import { PokemonFormsCreateNestedManyWithoutVersionGroupInput } from "../inputs/PokemonFormsCreateNestedManyWithoutVersionGroupInput";
import { PokemonMovesCreateNestedManyWithoutVersionGroupInput } from "../inputs/PokemonMovesCreateNestedManyWithoutVersionGroupInput";
import { VersionGroupPokemonMoveMethodsCreateNestedManyWithoutVersionGroupInput } from "../inputs/VersionGroupPokemonMoveMethodsCreateNestedManyWithoutVersionGroupInput";
import { VersionGroupRegionsCreateNestedManyWithoutVersionGroupInput } from "../inputs/VersionGroupRegionsCreateNestedManyWithoutVersionGroupInput";
import { VersionsCreateNestedManyWithoutVersionGroupInput } from "../inputs/VersionsCreateNestedManyWithoutVersionGroupInput";

@TypeGraphQL.InputType("VersionGroupsCreateWithoutGenerationInput", {})
export class VersionGroupsCreateWithoutGenerationInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identifier!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  order!: number;

  @TypeGraphQL.Field(_type => VersionsCreateNestedManyWithoutVersionGroupInput, {
    nullable: true
  })
  versions?: VersionsCreateNestedManyWithoutVersionGroupInput | undefined;

  @TypeGraphQL.Field(_type => EncounterSlotsCreateNestedManyWithoutVersionGroupInput, {
    nullable: true
  })
  encounterSlots?: EncounterSlotsCreateNestedManyWithoutVersionGroupInput | undefined;

  @TypeGraphQL.Field(_type => MachinesCreateNestedManyWithoutVersionGroupInput, {
    nullable: true
  })
  machines?: MachinesCreateNestedManyWithoutVersionGroupInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupPokemonMoveMethodsCreateNestedManyWithoutVersionGroupInput, {
    nullable: true
  })
  versionGroupPokemonMoveMethods?: VersionGroupPokemonMoveMethodsCreateNestedManyWithoutVersionGroupInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupRegionsCreateNestedManyWithoutVersionGroupInput, {
    nullable: true
  })
  versionGroupRegions?: VersionGroupRegionsCreateNestedManyWithoutVersionGroupInput | undefined;

  @TypeGraphQL.Field(_type => PokedexVersionGroupsCreateNestedManyWithoutVersionGroupInput, {
    nullable: true
  })
  pokedexVersionGroups?: PokedexVersionGroupsCreateNestedManyWithoutVersionGroupInput | undefined;

  @TypeGraphQL.Field(_type => PokemonMovesCreateNestedManyWithoutVersionGroupInput, {
    nullable: true
  })
  pokemonMoves?: PokemonMovesCreateNestedManyWithoutVersionGroupInput | undefined;

  @TypeGraphQL.Field(_type => PokemonFormsCreateNestedManyWithoutVersionGroupInput, {
    nullable: true
  })
  pokemonForms?: PokemonFormsCreateNestedManyWithoutVersionGroupInput | undefined;
}
