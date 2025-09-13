import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonAbilitiesUpdateWithoutPokemonInput } from "../inputs/PokemonAbilitiesUpdateWithoutPokemonInput";
import { PokemonAbilitiesWhereUniqueInput } from "../inputs/PokemonAbilitiesWhereUniqueInput";

@TypeGraphQL.InputType("PokemonAbilitiesUpdateWithWhereUniqueWithoutPokemonInput", {})
export class PokemonAbilitiesUpdateWithWhereUniqueWithoutPokemonInput {
  @TypeGraphQL.Field(_type => PokemonAbilitiesWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonAbilitiesWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonAbilitiesUpdateWithoutPokemonInput, {
    nullable: false
  })
  data!: PokemonAbilitiesUpdateWithoutPokemonInput;
}
