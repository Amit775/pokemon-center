import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonMovesCreateWithoutMoveMethodInput } from "../inputs/PokemonMovesCreateWithoutMoveMethodInput";
import { PokemonMovesWhereUniqueInput } from "../inputs/PokemonMovesWhereUniqueInput";

@TypeGraphQL.InputType("PokemonMovesCreateOrConnectWithoutMoveMethodInput", {})
export class PokemonMovesCreateOrConnectWithoutMoveMethodInput {
  @TypeGraphQL.Field(_type => PokemonMovesWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonMovesWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonMovesCreateWithoutMoveMethodInput, {
    nullable: false
  })
  create!: PokemonMovesCreateWithoutMoveMethodInput;
}
