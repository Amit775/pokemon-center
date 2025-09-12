import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonAbilitiesCreateWithoutPokemonInput } from "../inputs/PokemonAbilitiesCreateWithoutPokemonInput";
import { PokemonAbilitiesUpdateWithoutPokemonInput } from "../inputs/PokemonAbilitiesUpdateWithoutPokemonInput";
import { PokemonAbilitiesWhereUniqueInput } from "../inputs/PokemonAbilitiesWhereUniqueInput";

@TypeGraphQL.InputType("PokemonAbilitiesUpsertWithWhereUniqueWithoutPokemonInput", {})
export class PokemonAbilitiesUpsertWithWhereUniqueWithoutPokemonInput {
  @TypeGraphQL.Field(_type => PokemonAbilitiesWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonAbilitiesWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonAbilitiesUpdateWithoutPokemonInput, {
    nullable: false
  })
  update!: PokemonAbilitiesUpdateWithoutPokemonInput;

  @TypeGraphQL.Field(_type => PokemonAbilitiesCreateWithoutPokemonInput, {
    nullable: false
  })
  create!: PokemonAbilitiesCreateWithoutPokemonInput;
}
