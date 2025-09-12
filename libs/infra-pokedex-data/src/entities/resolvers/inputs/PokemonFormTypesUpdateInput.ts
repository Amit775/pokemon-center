import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { PokemonFormsUpdateOneRequiredWithoutTypesNestedInput } from "../inputs/PokemonFormsUpdateOneRequiredWithoutTypesNestedInput";
import { TypesUpdateOneRequiredWithoutFormTypesNestedInput } from "../inputs/TypesUpdateOneRequiredWithoutFormTypesNestedInput";

@TypeGraphQL.InputType("PokemonFormTypesUpdateInput", {})
export class PokemonFormTypesUpdateInput {
  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  slot?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => PokemonFormsUpdateOneRequiredWithoutTypesNestedInput, {
    nullable: true
  })
  pokemonForm?: PokemonFormsUpdateOneRequiredWithoutTypesNestedInput | undefined;

  @TypeGraphQL.Field(_type => TypesUpdateOneRequiredWithoutFormTypesNestedInput, {
    nullable: true
  })
  type?: TypesUpdateOneRequiredWithoutFormTypesNestedInput | undefined;
}
