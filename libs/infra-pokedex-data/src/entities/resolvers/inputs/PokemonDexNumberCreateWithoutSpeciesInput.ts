import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokedexCreateNestedOneWithoutDexNumbersInput } from "../inputs/PokedexCreateNestedOneWithoutDexNumbersInput";

@TypeGraphQL.InputType("PokemonDexNumberCreateWithoutSpeciesInput", {})
export class PokemonDexNumberCreateWithoutSpeciesInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  pokedex_number!: number;

  @TypeGraphQL.Field(_type => PokedexCreateNestedOneWithoutDexNumbersInput, {
    nullable: false
  })
  pokedex!: PokedexCreateNestedOneWithoutDexNumbersInput;
}
