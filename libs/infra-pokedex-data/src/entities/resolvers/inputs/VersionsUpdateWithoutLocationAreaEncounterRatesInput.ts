import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncountersUpdateManyWithoutVersionNestedInput } from "../inputs/EncountersUpdateManyWithoutVersionNestedInput";
import { PokemonGameIndicesUpdateManyWithoutVersionNestedInput } from "../inputs/PokemonGameIndicesUpdateManyWithoutVersionNestedInput";
import { PokemonItemsUpdateManyWithoutVersionNestedInput } from "../inputs/PokemonItemsUpdateManyWithoutVersionNestedInput";
import { VersionGroupsUpdateOneRequiredWithoutVersionsNestedInput } from "../inputs/VersionGroupsUpdateOneRequiredWithoutVersionsNestedInput";

@TypeGraphQL.InputType("VersionsUpdateWithoutLocationAreaEncounterRatesInput", {})
export class VersionsUpdateWithoutLocationAreaEncounterRatesInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  identifier?: string | undefined;

  @TypeGraphQL.Field(_type => VersionGroupsUpdateOneRequiredWithoutVersionsNestedInput, {
    nullable: true
  })
  versionGroup?: VersionGroupsUpdateOneRequiredWithoutVersionsNestedInput | undefined;

  @TypeGraphQL.Field(_type => EncountersUpdateManyWithoutVersionNestedInput, {
    nullable: true
  })
  encounters?: EncountersUpdateManyWithoutVersionNestedInput | undefined;

  @TypeGraphQL.Field(_type => PokemonItemsUpdateManyWithoutVersionNestedInput, {
    nullable: true
  })
  pokemonItems?: PokemonItemsUpdateManyWithoutVersionNestedInput | undefined;

  @TypeGraphQL.Field(_type => PokemonGameIndicesUpdateManyWithoutVersionNestedInput, {
    nullable: true
  })
  pokemonGameIndices?: PokemonGameIndicesUpdateManyWithoutVersionNestedInput | undefined;
}
