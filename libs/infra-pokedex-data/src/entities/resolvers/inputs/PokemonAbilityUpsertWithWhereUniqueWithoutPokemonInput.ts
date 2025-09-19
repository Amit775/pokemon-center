import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonAbilityCreateWithoutPokemonInput } from "../inputs/PokemonAbilityCreateWithoutPokemonInput";
import { PokemonAbilityUpdateWithoutPokemonInput } from "../inputs/PokemonAbilityUpdateWithoutPokemonInput";
import { PokemonAbilityWhereUniqueInput } from "../inputs/PokemonAbilityWhereUniqueInput";

@TypeGraphQL.InputType("PokemonAbilityUpsertWithWhereUniqueWithoutPokemonInput", {})
export class PokemonAbilityUpsertWithWhereUniqueWithoutPokemonInput {
  @TypeGraphQL.Field(_type => PokemonAbilityWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonAbilityWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonAbilityUpdateWithoutPokemonInput, {
    nullable: false
  })
  update!: PokemonAbilityUpdateWithoutPokemonInput;

  @TypeGraphQL.Field(_type => PokemonAbilityCreateWithoutPokemonInput, {
    nullable: false
  })
  create!: PokemonAbilityCreateWithoutPokemonInput;
}
