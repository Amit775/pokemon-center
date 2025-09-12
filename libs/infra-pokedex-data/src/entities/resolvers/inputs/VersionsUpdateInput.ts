import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncountersUpdateManyWithoutVersionNestedInput } from "../inputs/EncountersUpdateManyWithoutVersionNestedInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { LocationAreaEncounterRatesUpdateManyWithoutVersionNestedInput } from "../inputs/LocationAreaEncounterRatesUpdateManyWithoutVersionNestedInput";
import { PokemonGameIndicesUpdateManyWithoutVersionNestedInput } from "../inputs/PokemonGameIndicesUpdateManyWithoutVersionNestedInput";
import { PokemonItemsUpdateManyWithoutVersionNestedInput } from "../inputs/PokemonItemsUpdateManyWithoutVersionNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { VersionGroupsUpdateOneRequiredWithoutVersionsNestedInput } from "../inputs/VersionGroupsUpdateOneRequiredWithoutVersionsNestedInput";

@TypeGraphQL.InputType("VersionsUpdateInput", {})
export class VersionsUpdateInput {
  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  identifier?: StringFieldUpdateOperationsInput | undefined;

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

  @TypeGraphQL.Field(_type => LocationAreaEncounterRatesUpdateManyWithoutVersionNestedInput, {
    nullable: true
  })
  locationAreaEncounterRates?: LocationAreaEncounterRatesUpdateManyWithoutVersionNestedInput | undefined;
}
