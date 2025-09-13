import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonMoveMethodsCreateOrConnectWithoutPokemonMovesInput } from "../inputs/PokemonMoveMethodsCreateOrConnectWithoutPokemonMovesInput";
import { PokemonMoveMethodsCreateWithoutPokemonMovesInput } from "../inputs/PokemonMoveMethodsCreateWithoutPokemonMovesInput";
import { PokemonMoveMethodsWhereUniqueInput } from "../inputs/PokemonMoveMethodsWhereUniqueInput";

@TypeGraphQL.InputType("PokemonMoveMethodsCreateNestedOneWithoutPokemonMovesInput", {})
export class PokemonMoveMethodsCreateNestedOneWithoutPokemonMovesInput {
  @TypeGraphQL.Field(_type => PokemonMoveMethodsCreateWithoutPokemonMovesInput, {
    nullable: true
  })
  create?: PokemonMoveMethodsCreateWithoutPokemonMovesInput | undefined;

  @TypeGraphQL.Field(_type => PokemonMoveMethodsCreateOrConnectWithoutPokemonMovesInput, {
    nullable: true
  })
  connectOrCreate?: PokemonMoveMethodsCreateOrConnectWithoutPokemonMovesInput | undefined;

  @TypeGraphQL.Field(_type => PokemonMoveMethodsWhereUniqueInput, {
    nullable: true
  })
  connect?: PokemonMoveMethodsWhereUniqueInput | undefined;
}
