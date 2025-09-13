import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonMovesCreateWithoutVersionGroupInput } from "../inputs/PokemonMovesCreateWithoutVersionGroupInput";
import { PokemonMovesWhereUniqueInput } from "../inputs/PokemonMovesWhereUniqueInput";

@TypeGraphQL.InputType("PokemonMovesCreateOrConnectWithoutVersionGroupInput", {})
export class PokemonMovesCreateOrConnectWithoutVersionGroupInput {
  @TypeGraphQL.Field(_type => PokemonMovesWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonMovesWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonMovesCreateWithoutVersionGroupInput, {
    nullable: false
  })
  create!: PokemonMovesCreateWithoutVersionGroupInput;
}
