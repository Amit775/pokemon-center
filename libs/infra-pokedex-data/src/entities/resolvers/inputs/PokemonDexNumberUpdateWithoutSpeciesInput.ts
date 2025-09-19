import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokedexUpdateOneRequiredWithoutDexNumbersNestedInput } from "../inputs/PokedexUpdateOneRequiredWithoutDexNumbersNestedInput";

@TypeGraphQL.InputType("PokemonDexNumberUpdateWithoutSpeciesInput", {})
export class PokemonDexNumberUpdateWithoutSpeciesInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  pokedex_number?: number | undefined;

  @TypeGraphQL.Field(_type => PokedexUpdateOneRequiredWithoutDexNumbersNestedInput, {
    nullable: true
  })
  pokedex?: PokedexUpdateOneRequiredWithoutDexNumbersNestedInput | undefined;
}
