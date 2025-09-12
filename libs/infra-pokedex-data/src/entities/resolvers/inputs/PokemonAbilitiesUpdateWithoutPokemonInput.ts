import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AbilitiesUpdateOneRequiredWithoutPokemonAbilitiesNestedInput } from "../inputs/AbilitiesUpdateOneRequiredWithoutPokemonAbilitiesNestedInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";

@TypeGraphQL.InputType("PokemonAbilitiesUpdateWithoutPokemonInput", {})
export class PokemonAbilitiesUpdateWithoutPokemonInput {
  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  is_hidden?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  slot?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => AbilitiesUpdateOneRequiredWithoutPokemonAbilitiesNestedInput, {
    nullable: true
  })
  ability?: AbilitiesUpdateOneRequiredWithoutPokemonAbilitiesNestedInput | undefined;
}
