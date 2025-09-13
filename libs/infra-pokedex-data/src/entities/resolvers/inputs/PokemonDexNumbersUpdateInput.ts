import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokedexesUpdateOneRequiredWithoutDexNumbersNestedInput } from "../inputs/PokedexesUpdateOneRequiredWithoutDexNumbersNestedInput";
import { PokemonSpeciesUpdateOneRequiredWithoutDexNumbersNestedInput } from "../inputs/PokemonSpeciesUpdateOneRequiredWithoutDexNumbersNestedInput";

@TypeGraphQL.InputType("PokemonDexNumbersUpdateInput", {})
export class PokemonDexNumbersUpdateInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  pokedex_number?: number | undefined;

  @TypeGraphQL.Field(_type => PokemonSpeciesUpdateOneRequiredWithoutDexNumbersNestedInput, {
    nullable: true
  })
  species?: PokemonSpeciesUpdateOneRequiredWithoutDexNumbersNestedInput | undefined;

  @TypeGraphQL.Field(_type => PokedexesUpdateOneRequiredWithoutDexNumbersNestedInput, {
    nullable: true
  })
  pokedex?: PokedexesUpdateOneRequiredWithoutDexNumbersNestedInput | undefined;
}
