import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { PokedexesUpdateOneRequiredWithoutDexNumbersNestedInput } from "../inputs/PokedexesUpdateOneRequiredWithoutDexNumbersNestedInput";

@TypeGraphQL.InputType("PokemonDexNumbersUpdateWithoutSpeciesInput", {})
export class PokemonDexNumbersUpdateWithoutSpeciesInput {
  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  pokedex_number?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => PokedexesUpdateOneRequiredWithoutDexNumbersNestedInput, {
    nullable: true
  })
  pokedex?: PokedexesUpdateOneRequiredWithoutDexNumbersNestedInput | undefined;
}
