import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonMovesCreateWithoutPokemonInput } from "../inputs/PokemonMovesCreateWithoutPokemonInput";
import { PokemonMovesWhereUniqueInput } from "../inputs/PokemonMovesWhereUniqueInput";

@TypeGraphQL.InputType("PokemonMovesCreateOrConnectWithoutPokemonInput", {})
export class PokemonMovesCreateOrConnectWithoutPokemonInput {
  @TypeGraphQL.Field(_type => PokemonMovesWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonMovesWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonMovesCreateWithoutPokemonInput, {
    nullable: false
  })
  create!: PokemonMovesCreateWithoutPokemonInput;
}
