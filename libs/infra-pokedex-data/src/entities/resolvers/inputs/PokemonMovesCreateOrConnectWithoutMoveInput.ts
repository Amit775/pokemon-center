import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonMovesCreateWithoutMoveInput } from "../inputs/PokemonMovesCreateWithoutMoveInput";
import { PokemonMovesWhereUniqueInput } from "../inputs/PokemonMovesWhereUniqueInput";

@TypeGraphQL.InputType("PokemonMovesCreateOrConnectWithoutMoveInput", {})
export class PokemonMovesCreateOrConnectWithoutMoveInput {
  @TypeGraphQL.Field(_type => PokemonMovesWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonMovesWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonMovesCreateWithoutMoveInput, {
    nullable: false
  })
  create!: PokemonMovesCreateWithoutMoveInput;
}
