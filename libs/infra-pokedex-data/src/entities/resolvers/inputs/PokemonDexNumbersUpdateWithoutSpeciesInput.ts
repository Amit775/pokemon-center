import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokedexesUpdateOneRequiredWithoutDexNumbersNestedInput } from "../inputs/PokedexesUpdateOneRequiredWithoutDexNumbersNestedInput";

@TypeGraphQL.InputType("PokemonDexNumbersUpdateWithoutSpeciesInput", {})
export class PokemonDexNumbersUpdateWithoutSpeciesInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  pokedex_number?: number | undefined;

  @TypeGraphQL.Field(_type => PokedexesUpdateOneRequiredWithoutDexNumbersNestedInput, {
    nullable: true
  })
  pokedex?: PokedexesUpdateOneRequiredWithoutDexNumbersNestedInput | undefined;
}
