import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterSlotUpdateManyWithoutVersionGroupNestedInput } from "../inputs/EncounterSlotUpdateManyWithoutVersionGroupNestedInput";
import { GenerationUpdateOneRequiredWithoutVersionGroupsNestedInput } from "../inputs/GenerationUpdateOneRequiredWithoutVersionGroupsNestedInput";
import { MachineUpdateManyWithoutVersionGroupNestedInput } from "../inputs/MachineUpdateManyWithoutVersionGroupNestedInput";
import { PokedexVersionGroupUpdateManyWithoutVersionGroupNestedInput } from "../inputs/PokedexVersionGroupUpdateManyWithoutVersionGroupNestedInput";
import { PokemonFormUpdateManyWithoutVersionGroupNestedInput } from "../inputs/PokemonFormUpdateManyWithoutVersionGroupNestedInput";
import { PokemonMoveUpdateManyWithoutVersionGroupNestedInput } from "../inputs/PokemonMoveUpdateManyWithoutVersionGroupNestedInput";
import { VersionGroupPokemonMoveMethodUpdateManyWithoutVersionGroupNestedInput } from "../inputs/VersionGroupPokemonMoveMethodUpdateManyWithoutVersionGroupNestedInput";
import { VersionUpdateManyWithoutVersionGroupNestedInput } from "../inputs/VersionUpdateManyWithoutVersionGroupNestedInput";

@TypeGraphQL.InputType("VersionGroupUpdateWithoutVersionGroupRegionsInput", {})
export class VersionGroupUpdateWithoutVersionGroupRegionsInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  identifier?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  order?: number | undefined;

  @TypeGraphQL.Field(_type => GenerationUpdateOneRequiredWithoutVersionGroupsNestedInput, {
    nullable: true
  })
  generation?: GenerationUpdateOneRequiredWithoutVersionGroupsNestedInput | undefined;

  @TypeGraphQL.Field(_type => VersionUpdateManyWithoutVersionGroupNestedInput, {
    nullable: true
  })
  versions?: VersionUpdateManyWithoutVersionGroupNestedInput | undefined;

  @TypeGraphQL.Field(_type => EncounterSlotUpdateManyWithoutVersionGroupNestedInput, {
    nullable: true
  })
  encounterSlots?: EncounterSlotUpdateManyWithoutVersionGroupNestedInput | undefined;

  @TypeGraphQL.Field(_type => MachineUpdateManyWithoutVersionGroupNestedInput, {
    nullable: true
  })
  machines?: MachineUpdateManyWithoutVersionGroupNestedInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupPokemonMoveMethodUpdateManyWithoutVersionGroupNestedInput, {
    nullable: true
  })
  versionGroupPokemonMoveMethods?: VersionGroupPokemonMoveMethodUpdateManyWithoutVersionGroupNestedInput | undefined;

  @TypeGraphQL.Field(_type => PokedexVersionGroupUpdateManyWithoutVersionGroupNestedInput, {
    nullable: true
  })
  pokedexVersionGroups?: PokedexVersionGroupUpdateManyWithoutVersionGroupNestedInput | undefined;

  @TypeGraphQL.Field(_type => PokemonMoveUpdateManyWithoutVersionGroupNestedInput, {
    nullable: true
  })
  pokemonMoves?: PokemonMoveUpdateManyWithoutVersionGroupNestedInput | undefined;

  @TypeGraphQL.Field(_type => PokemonFormUpdateManyWithoutVersionGroupNestedInput, {
    nullable: true
  })
  pokemonForms?: PokemonFormUpdateManyWithoutVersionGroupNestedInput | undefined;
}
