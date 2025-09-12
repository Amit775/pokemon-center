import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { TypesUpdateOneRequiredWithoutFormTypesNestedInput } from "../inputs/TypesUpdateOneRequiredWithoutFormTypesNestedInput";

@TypeGraphQL.InputType("PokemonFormTypesUpdateWithoutPokemonFormInput", {})
export class PokemonFormTypesUpdateWithoutPokemonFormInput {
  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  slot?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => TypesUpdateOneRequiredWithoutFormTypesNestedInput, {
    nullable: true
  })
  type?: TypesUpdateOneRequiredWithoutFormTypesNestedInput | undefined;
}
