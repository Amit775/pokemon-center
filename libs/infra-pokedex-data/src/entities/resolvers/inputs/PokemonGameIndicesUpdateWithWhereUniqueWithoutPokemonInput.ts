import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonGameIndicesUpdateWithoutPokemonInput } from "../inputs/PokemonGameIndicesUpdateWithoutPokemonInput";
import { PokemonGameIndicesWhereUniqueInput } from "../inputs/PokemonGameIndicesWhereUniqueInput";

@TypeGraphQL.InputType("PokemonGameIndicesUpdateWithWhereUniqueWithoutPokemonInput", {})
export class PokemonGameIndicesUpdateWithWhereUniqueWithoutPokemonInput {
  @TypeGraphQL.Field(_type => PokemonGameIndicesWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonGameIndicesWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonGameIndicesUpdateWithoutPokemonInput, {
    nullable: false
  })
  data!: PokemonGameIndicesUpdateWithoutPokemonInput;
}
