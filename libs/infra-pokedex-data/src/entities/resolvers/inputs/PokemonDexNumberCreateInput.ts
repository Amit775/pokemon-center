import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokedexCreateNestedOneWithoutDexNumbersInput } from "../inputs/PokedexCreateNestedOneWithoutDexNumbersInput";
import { PokemonSpeciesCreateNestedOneWithoutDexNumbersInput } from "../inputs/PokemonSpeciesCreateNestedOneWithoutDexNumbersInput";

@TypeGraphQL.InputType("PokemonDexNumberCreateInput", {})
export class PokemonDexNumberCreateInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  pokedex_number!: number;

  @TypeGraphQL.Field(_type => PokemonSpeciesCreateNestedOneWithoutDexNumbersInput, {
    nullable: false
  })
  species!: PokemonSpeciesCreateNestedOneWithoutDexNumbersInput;

  @TypeGraphQL.Field(_type => PokedexCreateNestedOneWithoutDexNumbersInput, {
    nullable: false
  })
  pokedex!: PokedexCreateNestedOneWithoutDexNumbersInput;
}
