import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { PokemonUpdateOneRequiredWithoutTypesNestedInput } from "../inputs/PokemonUpdateOneRequiredWithoutTypesNestedInput";
import { TypesUpdateOneRequiredWithoutPokemonTypesNestedInput } from "../inputs/TypesUpdateOneRequiredWithoutPokemonTypesNestedInput";

@TypeGraphQL.InputType("PokemonTypesUpdateInput", {})
export class PokemonTypesUpdateInput {
  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  slot?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => PokemonUpdateOneRequiredWithoutTypesNestedInput, {
    nullable: true
  })
  pokemon?: PokemonUpdateOneRequiredWithoutTypesNestedInput | undefined;

  @TypeGraphQL.Field(_type => TypesUpdateOneRequiredWithoutPokemonTypesNestedInput, {
    nullable: true
  })
  type?: TypesUpdateOneRequiredWithoutPokemonTypesNestedInput | undefined;
}
