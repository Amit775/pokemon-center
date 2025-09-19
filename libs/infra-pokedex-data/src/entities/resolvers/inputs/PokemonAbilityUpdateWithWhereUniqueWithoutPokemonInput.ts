import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonAbilityUpdateWithoutPokemonInput } from "../inputs/PokemonAbilityUpdateWithoutPokemonInput";
import { PokemonAbilityWhereUniqueInput } from "../inputs/PokemonAbilityWhereUniqueInput";

@TypeGraphQL.InputType("PokemonAbilityUpdateWithWhereUniqueWithoutPokemonInput", {})
export class PokemonAbilityUpdateWithWhereUniqueWithoutPokemonInput {
  @TypeGraphQL.Field(_type => PokemonAbilityWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonAbilityWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonAbilityUpdateWithoutPokemonInput, {
    nullable: false
  })
  data!: PokemonAbilityUpdateWithoutPokemonInput;
}
