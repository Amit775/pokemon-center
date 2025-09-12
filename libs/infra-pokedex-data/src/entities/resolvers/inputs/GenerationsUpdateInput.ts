import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AbilitiesUpdateManyWithoutGenerationNestedInput } from "../inputs/AbilitiesUpdateManyWithoutGenerationNestedInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { ItemGameIndicesUpdateManyWithoutGenerationNestedInput } from "../inputs/ItemGameIndicesUpdateManyWithoutGenerationNestedInput";
import { LocationGameIndicesUpdateManyWithoutGenerationNestedInput } from "../inputs/LocationGameIndicesUpdateManyWithoutGenerationNestedInput";
import { MovesUpdateManyWithoutGenerationNestedInput } from "../inputs/MovesUpdateManyWithoutGenerationNestedInput";
import { PokemonFormGenerationsUpdateManyWithoutGenerationNestedInput } from "../inputs/PokemonFormGenerationsUpdateManyWithoutGenerationNestedInput";
import { PokemonSpeciesUpdateManyWithoutGenerationNestedInput } from "../inputs/PokemonSpeciesUpdateManyWithoutGenerationNestedInput";
import { RegionsUpdateOneRequiredWithoutGenerationsNestedInput } from "../inputs/RegionsUpdateOneRequiredWithoutGenerationsNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TypeGameIndicesUpdateManyWithoutGenerationNestedInput } from "../inputs/TypeGameIndicesUpdateManyWithoutGenerationNestedInput";
import { TypesUpdateManyWithoutGenerationNestedInput } from "../inputs/TypesUpdateManyWithoutGenerationNestedInput";
import { VersionGroupsUpdateManyWithoutGenerationNestedInput } from "../inputs/VersionGroupsUpdateManyWithoutGenerationNestedInput";

@TypeGraphQL.InputType("GenerationsUpdateInput", {})
export class GenerationsUpdateInput {
  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  identifier?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => RegionsUpdateOneRequiredWithoutGenerationsNestedInput, {
    nullable: true
  })
  region?: RegionsUpdateOneRequiredWithoutGenerationsNestedInput | undefined;

  @TypeGraphQL.Field(_type => PokemonSpeciesUpdateManyWithoutGenerationNestedInput, {
    nullable: true
  })
  pokemonSpecies?: PokemonSpeciesUpdateManyWithoutGenerationNestedInput | undefined;

  @TypeGraphQL.Field(_type => MovesUpdateManyWithoutGenerationNestedInput, {
    nullable: true
  })
  moves?: MovesUpdateManyWithoutGenerationNestedInput | undefined;

  @TypeGraphQL.Field(_type => TypesUpdateManyWithoutGenerationNestedInput, {
    nullable: true
  })
  types?: TypesUpdateManyWithoutGenerationNestedInput | undefined;

  @TypeGraphQL.Field(_type => AbilitiesUpdateManyWithoutGenerationNestedInput, {
    nullable: true
  })
  abilities?: AbilitiesUpdateManyWithoutGenerationNestedInput | undefined;

  @TypeGraphQL.Field(_type => PokemonFormGenerationsUpdateManyWithoutGenerationNestedInput, {
    nullable: true
  })
  pokemonFormGenerations?: PokemonFormGenerationsUpdateManyWithoutGenerationNestedInput | undefined;

  @TypeGraphQL.Field(_type => ItemGameIndicesUpdateManyWithoutGenerationNestedInput, {
    nullable: true
  })
  itemGameIndices?: ItemGameIndicesUpdateManyWithoutGenerationNestedInput | undefined;

  @TypeGraphQL.Field(_type => TypeGameIndicesUpdateManyWithoutGenerationNestedInput, {
    nullable: true
  })
  typeGameIndices?: TypeGameIndicesUpdateManyWithoutGenerationNestedInput | undefined;

  @TypeGraphQL.Field(_type => LocationGameIndicesUpdateManyWithoutGenerationNestedInput, {
    nullable: true
  })
  locationGameIndices?: LocationGameIndicesUpdateManyWithoutGenerationNestedInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupsUpdateManyWithoutGenerationNestedInput, {
    nullable: true
  })
  versionGroups?: VersionGroupsUpdateManyWithoutGenerationNestedInput | undefined;
}
