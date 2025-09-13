import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonMovesUpdateWithoutPokemonInput } from "../inputs/PokemonMovesUpdateWithoutPokemonInput";
import { PokemonMovesWhereUniqueInput } from "../inputs/PokemonMovesWhereUniqueInput";

@TypeGraphQL.InputType("PokemonMovesUpdateWithWhereUniqueWithoutPokemonInput", {})
export class PokemonMovesUpdateWithWhereUniqueWithoutPokemonInput {
  @TypeGraphQL.Field(_type => PokemonMovesWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonMovesWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonMovesUpdateWithoutPokemonInput, {
    nullable: false
  })
  data!: PokemonMovesUpdateWithoutPokemonInput;
}
