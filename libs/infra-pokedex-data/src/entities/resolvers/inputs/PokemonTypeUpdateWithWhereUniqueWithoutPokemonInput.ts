import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonTypeUpdateWithoutPokemonInput } from "../inputs/PokemonTypeUpdateWithoutPokemonInput";
import { PokemonTypeWhereUniqueInput } from "../inputs/PokemonTypeWhereUniqueInput";

@TypeGraphQL.InputType("PokemonTypeUpdateWithWhereUniqueWithoutPokemonInput", {})
export class PokemonTypeUpdateWithWhereUniqueWithoutPokemonInput {
  @TypeGraphQL.Field(_type => PokemonTypeWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonTypeWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonTypeUpdateWithoutPokemonInput, {
    nullable: false
  })
  data!: PokemonTypeUpdateWithoutPokemonInput;
}
