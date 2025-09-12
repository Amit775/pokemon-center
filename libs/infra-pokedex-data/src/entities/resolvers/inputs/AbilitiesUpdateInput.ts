import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenerationsUpdateOneRequiredWithoutAbilitiesNestedInput } from "../inputs/GenerationsUpdateOneRequiredWithoutAbilitiesNestedInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { PokemonAbilitiesUpdateManyWithoutAbilityNestedInput } from "../inputs/PokemonAbilitiesUpdateManyWithoutAbilityNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("AbilitiesUpdateInput", {})
export class AbilitiesUpdateInput {
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
  is_main_series?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => GenerationsUpdateOneRequiredWithoutAbilitiesNestedInput, {
    nullable: true
  })
  generation?: GenerationsUpdateOneRequiredWithoutAbilitiesNestedInput | undefined;

  @TypeGraphQL.Field(_type => PokemonAbilitiesUpdateManyWithoutAbilityNestedInput, {
    nullable: true
  })
  pokemonAbilities?: PokemonAbilitiesUpdateManyWithoutAbilityNestedInput | undefined;
}
