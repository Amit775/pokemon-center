import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonMoveMethodCreateWithoutPokemonMovesInput } from "../inputs/PokemonMoveMethodCreateWithoutPokemonMovesInput";
import { PokemonMoveMethodWhereUniqueInput } from "../inputs/PokemonMoveMethodWhereUniqueInput";

@TypeGraphQL.InputType("PokemonMoveMethodCreateOrConnectWithoutPokemonMovesInput", {})
export class PokemonMoveMethodCreateOrConnectWithoutPokemonMovesInput {
  @TypeGraphQL.Field(_type => PokemonMoveMethodWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonMoveMethodWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonMoveMethodCreateWithoutPokemonMovesInput, {
    nullable: false
  })
  create!: PokemonMoveMethodCreateWithoutPokemonMovesInput;
}
