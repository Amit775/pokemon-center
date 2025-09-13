import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterSlotsUpdateManyWithoutVersionGroupNestedInput } from "../inputs/EncounterSlotsUpdateManyWithoutVersionGroupNestedInput";
import { GenerationsUpdateOneRequiredWithoutVersionGroupsNestedInput } from "../inputs/GenerationsUpdateOneRequiredWithoutVersionGroupsNestedInput";
import { MachinesUpdateManyWithoutVersionGroupNestedInput } from "../inputs/MachinesUpdateManyWithoutVersionGroupNestedInput";
import { PokemonFormsUpdateManyWithoutVersionGroupNestedInput } from "../inputs/PokemonFormsUpdateManyWithoutVersionGroupNestedInput";
import { PokemonMovesUpdateManyWithoutVersionGroupNestedInput } from "../inputs/PokemonMovesUpdateManyWithoutVersionGroupNestedInput";
import { VersionGroupPokemonMoveMethodsUpdateManyWithoutVersionGroupNestedInput } from "../inputs/VersionGroupPokemonMoveMethodsUpdateManyWithoutVersionGroupNestedInput";
import { VersionGroupRegionsUpdateManyWithoutVersionGroupNestedInput } from "../inputs/VersionGroupRegionsUpdateManyWithoutVersionGroupNestedInput";
import { VersionsUpdateManyWithoutVersionGroupNestedInput } from "../inputs/VersionsUpdateManyWithoutVersionGroupNestedInput";

@TypeGraphQL.InputType("VersionGroupsUpdateWithoutPokedexVersionGroupsInput", {})
export class VersionGroupsUpdateWithoutPokedexVersionGroupsInput {
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

  @TypeGraphQL.Field(_type => GenerationsUpdateOneRequiredWithoutVersionGroupsNestedInput, {
    nullable: true
  })
  generation?: GenerationsUpdateOneRequiredWithoutVersionGroupsNestedInput | undefined;

  @TypeGraphQL.Field(_type => VersionsUpdateManyWithoutVersionGroupNestedInput, {
    nullable: true
  })
  versions?: VersionsUpdateManyWithoutVersionGroupNestedInput | undefined;

  @TypeGraphQL.Field(_type => EncounterSlotsUpdateManyWithoutVersionGroupNestedInput, {
    nullable: true
  })
  encounterSlots?: EncounterSlotsUpdateManyWithoutVersionGroupNestedInput | undefined;

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

  @TypeGraphQL.Field(_type => PokemonMovesUpdateManyWithoutVersionGroupNestedInput, {
    nullable: true
  })
  pokemonMoves?: PokemonMovesUpdateManyWithoutVersionGroupNestedInput | undefined;

  @TypeGraphQL.Field(_type => PokemonFormsUpdateManyWithoutVersionGroupNestedInput, {
    nullable: true
  })
  pokemonForms?: PokemonFormsUpdateManyWithoutVersionGroupNestedInput | undefined;
}
