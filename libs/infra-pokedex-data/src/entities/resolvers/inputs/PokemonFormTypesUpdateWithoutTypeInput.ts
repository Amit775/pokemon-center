import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { PokemonFormsUpdateOneRequiredWithoutTypesNestedInput } from "../inputs/PokemonFormsUpdateOneRequiredWithoutTypesNestedInput";

@TypeGraphQL.InputType("PokemonFormTypesUpdateWithoutTypeInput", {})
export class PokemonFormTypesUpdateWithoutTypeInput {
  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  slot?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => PokemonFormsUpdateOneRequiredWithoutTypesNestedInput, {
    nullable: true
  })
  pokemonForm?: PokemonFormsUpdateOneRequiredWithoutTypesNestedInput | undefined;
}
