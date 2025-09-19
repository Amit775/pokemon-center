import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonGameIndexUpdateWithoutPokemonInput } from "../inputs/PokemonGameIndexUpdateWithoutPokemonInput";
import { PokemonGameIndexWhereUniqueInput } from "../inputs/PokemonGameIndexWhereUniqueInput";

@TypeGraphQL.InputType("PokemonGameIndexUpdateWithWhereUniqueWithoutPokemonInput", {})
export class PokemonGameIndexUpdateWithWhereUniqueWithoutPokemonInput {
  @TypeGraphQL.Field(_type => PokemonGameIndexWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonGameIndexWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonGameIndexUpdateWithoutPokemonInput, {
    nullable: false
  })
  data!: PokemonGameIndexUpdateWithoutPokemonInput;
}
