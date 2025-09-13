import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonGameIndicesCreateWithoutPokemonInput } from "../inputs/PokemonGameIndicesCreateWithoutPokemonInput";
import { PokemonGameIndicesUpdateWithoutPokemonInput } from "../inputs/PokemonGameIndicesUpdateWithoutPokemonInput";
import { PokemonGameIndicesWhereUniqueInput } from "../inputs/PokemonGameIndicesWhereUniqueInput";

@TypeGraphQL.InputType("PokemonGameIndicesUpsertWithWhereUniqueWithoutPokemonInput", {})
export class PokemonGameIndicesUpsertWithWhereUniqueWithoutPokemonInput {
  @TypeGraphQL.Field(_type => PokemonGameIndicesWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonGameIndicesWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonGameIndicesUpdateWithoutPokemonInput, {
    nullable: false
  })
  update!: PokemonGameIndicesUpdateWithoutPokemonInput;

  @TypeGraphQL.Field(_type => PokemonGameIndicesCreateWithoutPokemonInput, {
    nullable: false
  })
  create!: PokemonGameIndicesCreateWithoutPokemonInput;
}
