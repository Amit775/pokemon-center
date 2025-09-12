import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenerationsUpdateOneRequiredWithoutVersionGroupsNestedInput } from "../inputs/GenerationsUpdateOneRequiredWithoutVersionGroupsNestedInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { MachinesUpdateManyWithoutVersionGroupNestedInput } from "../inputs/MachinesUpdateManyWithoutVersionGroupNestedInput";
import { PokedexVersionGroupsUpdateManyWithoutVersionGroupNestedInput } from "../inputs/PokedexVersionGroupsUpdateManyWithoutVersionGroupNestedInput";
import { PokemonFormsUpdateManyWithoutVersionGroupNestedInput } from "../inputs/PokemonFormsUpdateManyWithoutVersionGroupNestedInput";
import { PokemonMovesUpdateManyWithoutVersionGroupNestedInput } from "../inputs/PokemonMovesUpdateManyWithoutVersionGroupNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { VersionGroupPokemonMoveMethodsUpdateManyWithoutVersionGroupNestedInput } from "../inputs/VersionGroupPokemonMoveMethodsUpdateManyWithoutVersionGroupNestedInput";
import { VersionGroupRegionsUpdateManyWithoutVersionGroupNestedInput } from "../inputs/VersionGroupRegionsUpdateManyWithoutVersionGroupNestedInput";
import { VersionsUpdateManyWithoutVersionGroupNestedInput } from "../inputs/VersionsUpdateManyWithoutVersionGroupNestedInput";

@TypeGraphQL.InputType("VersionGroupsUpdateWithoutEncounterSlotsInput", {})
export class VersionGroupsUpdateWithoutEncounterSlotsInput {
  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  identifier?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  order?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => GenerationsUpdateOneRequiredWithoutVersionGroupsNestedInput, {
    nullable: true
  })
  generation?: GenerationsUpdateOneRequiredWithoutVersionGroupsNestedInput | undefined;

  @TypeGraphQL.Field(_type => VersionsUpdateManyWithoutVersionGroupNestedInput, {
    nullable: true
  })
  versions?: VersionsUpdateManyWithoutVersionGroupNestedInput | undefined;

  @TypeGraphQL.Field(_type => MachinesUpdateManyWithoutVersionGroupNestedInput, {
    nullable: true
  })
  machines?: MachinesUpdateManyWithoutVersionGroupNestedInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupPokemonMoveMethodsUpdateManyWithoutVersionGroupNestedInput, {
    nullable: true
  })
  versionGroupPokemonMoveMethods?: VersionGroupPokemonMoveMethodsUpdateManyWithoutVersionGroupNestedInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupRegionsUpdateManyWithoutVersionGroupNestedInput, {
    nullable: true
  })
  versionGroupRegions?: VersionGroupRegionsUpdateManyWithoutVersionGroupNestedInput | undefined;

  @TypeGraphQL.Field(_type => PokedexVersionGroupsUpdateManyWithoutVersionGroupNestedInput, {
    nullable: true
  })
  pokedexVersionGroups?: PokedexVersionGroupsUpdateManyWithoutVersionGroupNestedInput | undefined;

  @TypeGraphQL.Field(_type => PokemonMovesUpdateManyWithoutVersionGroupNestedInput, {
    nullable: true
  })
  pokemonMoves?: PokemonMovesUpdateManyWithoutVersionGroupNestedInput | undefined;

  @TypeGraphQL.Field(_type => PokemonFormsUpdateManyWithoutVersionGroupNestedInput, {
    nullable: true
  })
  pokemonForms?: PokemonFormsUpdateManyWithoutVersionGroupNestedInput | undefined;
}
