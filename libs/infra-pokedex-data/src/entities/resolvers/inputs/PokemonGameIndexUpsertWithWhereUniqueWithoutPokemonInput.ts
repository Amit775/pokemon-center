import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonGameIndexCreateWithoutPokemonInput } from "../inputs/PokemonGameIndexCreateWithoutPokemonInput";
import { PokemonGameIndexUpdateWithoutPokemonInput } from "../inputs/PokemonGameIndexUpdateWithoutPokemonInput";
import { PokemonGameIndexWhereUniqueInput } from "../inputs/PokemonGameIndexWhereUniqueInput";

@TypeGraphQL.InputType("PokemonGameIndexUpsertWithWhereUniqueWithoutPokemonInput", {})
export class PokemonGameIndexUpsertWithWhereUniqueWithoutPokemonInput {
  @TypeGraphQL.Field(_type => PokemonGameIndexWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonGameIndexWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonGameIndexUpdateWithoutPokemonInput, {
    nullable: false
  })
  update!: PokemonGameIndexUpdateWithoutPokemonInput;

  @TypeGraphQL.Field(_type => PokemonGameIndexCreateWithoutPokemonInput, {
    nullable: false
  })
  create!: PokemonGameIndexCreateWithoutPokemonInput;
}
