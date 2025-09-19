import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokedexUpdateOneRequiredWithoutDexNumbersNestedInput } from "../inputs/PokedexUpdateOneRequiredWithoutDexNumbersNestedInput";
import { PokemonSpeciesUpdateOneRequiredWithoutDexNumbersNestedInput } from "../inputs/PokemonSpeciesUpdateOneRequiredWithoutDexNumbersNestedInput";

@TypeGraphQL.InputType("PokemonDexNumberUpdateInput", {})
export class PokemonDexNumberUpdateInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  pokedex_number?: number | undefined;

  @TypeGraphQL.Field(_type => PokemonSpeciesUpdateOneRequiredWithoutDexNumbersNestedInput, {
    nullable: true
  })
  species?: PokemonSpeciesUpdateOneRequiredWithoutDexNumbersNestedInput | undefined;

  @TypeGraphQL.Field(_type => PokedexUpdateOneRequiredWithoutDexNumbersNestedInput, {
    nullable: true
  })
  pokedex?: PokedexUpdateOneRequiredWithoutDexNumbersNestedInput | undefined;
}
