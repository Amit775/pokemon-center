import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncountersUpdateManyWithoutPokemonNestedInput } from "../inputs/EncountersUpdateManyWithoutPokemonNestedInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { NullableIntFieldUpdateOperationsInput } from "../inputs/NullableIntFieldUpdateOperationsInput";
import { PokemonAbilitiesUpdateManyWithoutPokemonNestedInput } from "../inputs/PokemonAbilitiesUpdateManyWithoutPokemonNestedInput";
import { PokemonGameIndicesUpdateManyWithoutPokemonNestedInput } from "../inputs/PokemonGameIndicesUpdateManyWithoutPokemonNestedInput";
import { PokemonItemsUpdateManyWithoutPokemonNestedInput } from "../inputs/PokemonItemsUpdateManyWithoutPokemonNestedInput";
import { PokemonMovesUpdateManyWithoutPokemonNestedInput } from "../inputs/PokemonMovesUpdateManyWithoutPokemonNestedInput";
import { PokemonSpeciesUpdateOneRequiredWithoutPokemonNestedInput } from "../inputs/PokemonSpeciesUpdateOneRequiredWithoutPokemonNestedInput";
import { PokemonStatsUpdateManyWithoutPokemonNestedInput } from "../inputs/PokemonStatsUpdateManyWithoutPokemonNestedInput";
import { PokemonTypesUpdateManyWithoutPokemonNestedInput } from "../inputs/PokemonTypesUpdateManyWithoutPokemonNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("PokemonUpdateWithoutFormsInput", {})
export class PokemonUpdateWithoutFormsInput {
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
  height?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  weight?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  base_experience?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableIntFieldUpdateOperationsInput, {
    nullable: true
  })
  order?: NullableIntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  is_default?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => PokemonSpeciesUpdateOneRequiredWithoutPokemonNestedInput, {
    nullable: true
  })
  species?: PokemonSpeciesUpdateOneRequiredWithoutPokemonNestedInput | undefined;

  @TypeGraphQL.Field(_type => PokemonAbilitiesUpdateManyWithoutPokemonNestedInput, {
    nullable: true
  })
  abilities?: PokemonAbilitiesUpdateManyWithoutPokemonNestedInput | undefined;

  @TypeGraphQL.Field(_type => PokemonMovesUpdateManyWithoutPokemonNestedInput, {
    nullable: true
  })
  moves?: PokemonMovesUpdateManyWithoutPokemonNestedInput | undefined;

  @TypeGraphQL.Field(_type => PokemonStatsUpdateManyWithoutPokemonNestedInput, {
    nullable: true
  })
  stats?: PokemonStatsUpdateManyWithoutPokemonNestedInput | undefined;

  @TypeGraphQL.Field(_type => PokemonTypesUpdateManyWithoutPokemonNestedInput, {
    nullable: true
  })
  types?: PokemonTypesUpdateManyWithoutPokemonNestedInput | undefined;

  @TypeGraphQL.Field(_type => PokemonItemsUpdateManyWithoutPokemonNestedInput, {
    nullable: true
  })
  items?: PokemonItemsUpdateManyWithoutPokemonNestedInput | undefined;

  @TypeGraphQL.Field(_type => PokemonGameIndicesUpdateManyWithoutPokemonNestedInput, {
    nullable: true
  })
  gameIndices?: PokemonGameIndicesUpdateManyWithoutPokemonNestedInput | undefined;

  @TypeGraphQL.Field(_type => EncountersUpdateManyWithoutPokemonNestedInput, {
    nullable: true
  })
  encounters?: EncountersUpdateManyWithoutPokemonNestedInput | undefined;
}
