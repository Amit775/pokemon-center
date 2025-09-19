import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveCreateWithoutPokemonMovesInput } from "../inputs/MoveCreateWithoutPokemonMovesInput";
import { MoveWhereUniqueInput } from "../inputs/MoveWhereUniqueInput";

@TypeGraphQL.InputType("MoveCreateOrConnectWithoutPokemonMovesInput", {})
export class MoveCreateOrConnectWithoutPokemonMovesInput {
  @TypeGraphQL.Field(_type => MoveWhereUniqueInput, {
    nullable: false
  })
  where!: MoveWhereUniqueInput;

  @TypeGraphQL.Field(_type => MoveCreateWithoutPokemonMovesInput, {
    nullable: false
  })
  create!: MoveCreateWithoutPokemonMovesInput;
}
