import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterSlotCreateNestedManyWithoutVersionGroupInput } from "../inputs/EncounterSlotCreateNestedManyWithoutVersionGroupInput";
import { GenerationCreateNestedOneWithoutVersionGroupsInput } from "../inputs/GenerationCreateNestedOneWithoutVersionGroupsInput";
import { MachineCreateNestedManyWithoutVersionGroupInput } from "../inputs/MachineCreateNestedManyWithoutVersionGroupInput";
import { PokedexVersionGroupCreateNestedManyWithoutVersionGroupInput } from "../inputs/PokedexVersionGroupCreateNestedManyWithoutVersionGroupInput";
import { PokemonFormCreateNestedManyWithoutVersionGroupInput } from "../inputs/PokemonFormCreateNestedManyWithoutVersionGroupInput";
import { PokemonMoveCreateNestedManyWithoutVersionGroupInput } from "../inputs/PokemonMoveCreateNestedManyWithoutVersionGroupInput";
import { VersionCreateNestedManyWithoutVersionGroupInput } from "../inputs/VersionCreateNestedManyWithoutVersionGroupInput";
import { VersionGroupPokemonMoveMethodCreateNestedManyWithoutVersionGroupInput } from "../inputs/VersionGroupPokemonMoveMethodCreateNestedManyWithoutVersionGroupInput";

@TypeGraphQL.InputType("VersionGroupCreateWithoutVersionGroupRegionsInput", {})
export class VersionGroupCreateWithoutVersionGroupRegionsInput {
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

  @TypeGraphQL.Field(_type => GenerationCreateNestedOneWithoutVersionGroupsInput, {
    nullable: false
  })
  generation!: GenerationCreateNestedOneWithoutVersionGroupsInput;

  @TypeGraphQL.Field(_type => VersionCreateNestedManyWithoutVersionGroupInput, {
    nullable: true
  })
  versions?: VersionCreateNestedManyWithoutVersionGroupInput | undefined;

  @TypeGraphQL.Field(_type => EncounterSlotCreateNestedManyWithoutVersionGroupInput, {
    nullable: true
  })
  encounterSlots?: EncounterSlotCreateNestedManyWithoutVersionGroupInput | undefined;

  @TypeGraphQL.Field(_type => MachineCreateNestedManyWithoutVersionGroupInput, {
    nullable: true
  })
  machines?: MachineCreateNestedManyWithoutVersionGroupInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupPokemonMoveMethodCreateNestedManyWithoutVersionGroupInput, {
    nullable: true
  })
  versionGroupPokemonMoveMethods?: VersionGroupPokemonMoveMethodCreateNestedManyWithoutVersionGroupInput | undefined;

  @TypeGraphQL.Field(_type => PokedexVersionGroupCreateNestedManyWithoutVersionGroupInput, {
    nullable: true
  })
  pokedexVersionGroups?: PokedexVersionGroupCreateNestedManyWithoutVersionGroupInput | undefined;

  @TypeGraphQL.Field(_type => PokemonMoveCreateNestedManyWithoutVersionGroupInput, {
    nullable: true
  })
  pokemonMoves?: PokemonMoveCreateNestedManyWithoutVersionGroupInput | undefined;

  @TypeGraphQL.Field(_type => PokemonFormCreateNestedManyWithoutVersionGroupInput, {
    nullable: true
  })
  pokemonForms?: PokemonFormCreateNestedManyWithoutVersionGroupInput | undefined;
}
