import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonSpeciesCreateNestedOneWithoutDexNumbersInput } from "../inputs/PokemonSpeciesCreateNestedOneWithoutDexNumbersInput";

@TypeGraphQL.InputType("PokemonDexNumbersCreateWithoutPokedexInput", {})
export class PokemonDexNumbersCreateWithoutPokedexInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  pokedex_number!: number;

  @TypeGraphQL.Field(_type => PokemonSpeciesCreateNestedOneWithoutDexNumbersInput, {
    nullable: false
  })
  species!: PokemonSpeciesCreateNestedOneWithoutDexNumbersInput;
}
