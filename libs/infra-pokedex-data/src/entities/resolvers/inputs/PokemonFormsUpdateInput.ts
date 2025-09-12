import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { PokemonFormGenerationsUpdateManyWithoutPokemonFormNestedInput } from "../inputs/PokemonFormGenerationsUpdateManyWithoutPokemonFormNestedInput";
import { PokemonFormTypesUpdateManyWithoutPokemonFormNestedInput } from "../inputs/PokemonFormTypesUpdateManyWithoutPokemonFormNestedInput";
import { PokemonUpdateOneRequiredWithoutFormsNestedInput } from "../inputs/PokemonUpdateOneRequiredWithoutFormsNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { VersionGroupsUpdateOneRequiredWithoutPokemonFormsNestedInput } from "../inputs/VersionGroupsUpdateOneRequiredWithoutPokemonFormsNestedInput";

@TypeGraphQL.InputType("PokemonFormsUpdateInput", {})
export class PokemonFormsUpdateInput {
  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  identifier?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  form_identifier?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  is_default?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  is_battle_only?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  is_mega?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  form_order?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  order?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => PokemonUpdateOneRequiredWithoutFormsNestedInput, {
    nullable: true
  })
  pokemon?: PokemonUpdateOneRequiredWithoutFormsNestedInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupsUpdateOneRequiredWithoutPokemonFormsNestedInput, {
    nullable: true
  })
  versionGroup?: VersionGroupsUpdateOneRequiredWithoutPokemonFormsNestedInput | undefined;

  @TypeGraphQL.Field(_type => PokemonFormGenerationsUpdateManyWithoutPokemonFormNestedInput, {
    nullable: true
  })
  generations?: PokemonFormGenerationsUpdateManyWithoutPokemonFormNestedInput | undefined;

  @TypeGraphQL.Field(_type => PokemonFormTypesUpdateManyWithoutPokemonFormNestedInput, {
    nullable: true
  })
  types?: PokemonFormTypesUpdateManyWithoutPokemonFormNestedInput | undefined;
}
