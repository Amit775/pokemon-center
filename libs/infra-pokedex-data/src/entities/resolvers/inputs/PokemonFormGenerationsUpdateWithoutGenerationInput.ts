import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { PokemonFormsUpdateOneRequiredWithoutGenerationsNestedInput } from "../inputs/PokemonFormsUpdateOneRequiredWithoutGenerationsNestedInput";

@TypeGraphQL.InputType("PokemonFormGenerationsUpdateWithoutGenerationInput", {})
export class PokemonFormGenerationsUpdateWithoutGenerationInput {
  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  game_index?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => PokemonFormsUpdateOneRequiredWithoutGenerationsNestedInput, {
    nullable: true
  })
  pokemonForm?: PokemonFormsUpdateOneRequiredWithoutGenerationsNestedInput | undefined;
}
