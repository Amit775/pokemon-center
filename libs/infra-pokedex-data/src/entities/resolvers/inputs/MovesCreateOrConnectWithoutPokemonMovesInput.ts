import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovesCreateWithoutPokemonMovesInput } from "../inputs/MovesCreateWithoutPokemonMovesInput";
import { MovesWhereUniqueInput } from "../inputs/MovesWhereUniqueInput";

@TypeGraphQL.InputType("MovesCreateOrConnectWithoutPokemonMovesInput", {})
export class MovesCreateOrConnectWithoutPokemonMovesInput {
  @TypeGraphQL.Field(_type => MovesWhereUniqueInput, {
    nullable: false
  })
  where!: MovesWhereUniqueInput;

  @TypeGraphQL.Field(_type => MovesCreateWithoutPokemonMovesInput, {
    nullable: false
  })
  create!: MovesCreateWithoutPokemonMovesInput;
}
