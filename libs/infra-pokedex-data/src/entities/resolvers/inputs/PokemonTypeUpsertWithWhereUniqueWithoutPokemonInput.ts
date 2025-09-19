import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonTypeCreateWithoutPokemonInput } from "../inputs/PokemonTypeCreateWithoutPokemonInput";
import { PokemonTypeUpdateWithoutPokemonInput } from "../inputs/PokemonTypeUpdateWithoutPokemonInput";
import { PokemonTypeWhereUniqueInput } from "../inputs/PokemonTypeWhereUniqueInput";

@TypeGraphQL.InputType("PokemonTypeUpsertWithWhereUniqueWithoutPokemonInput", {})
export class PokemonTypeUpsertWithWhereUniqueWithoutPokemonInput {
  @TypeGraphQL.Field(_type => PokemonTypeWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonTypeWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonTypeUpdateWithoutPokemonInput, {
    nullable: false
  })
  update!: PokemonTypeUpdateWithoutPokemonInput;

  @TypeGraphQL.Field(_type => PokemonTypeCreateWithoutPokemonInput, {
    nullable: false
  })
  create!: PokemonTypeCreateWithoutPokemonInput;
}
