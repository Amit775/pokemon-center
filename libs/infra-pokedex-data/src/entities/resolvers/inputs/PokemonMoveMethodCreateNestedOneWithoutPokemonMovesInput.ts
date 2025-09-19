import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonMoveMethodCreateOrConnectWithoutPokemonMovesInput } from "../inputs/PokemonMoveMethodCreateOrConnectWithoutPokemonMovesInput";
import { PokemonMoveMethodCreateWithoutPokemonMovesInput } from "../inputs/PokemonMoveMethodCreateWithoutPokemonMovesInput";
import { PokemonMoveMethodWhereUniqueInput } from "../inputs/PokemonMoveMethodWhereUniqueInput";

@TypeGraphQL.InputType("PokemonMoveMethodCreateNestedOneWithoutPokemonMovesInput", {})
export class PokemonMoveMethodCreateNestedOneWithoutPokemonMovesInput {
  @TypeGraphQL.Field(_type => PokemonMoveMethodCreateWithoutPokemonMovesInput, {
    nullable: true
  })
  create?: PokemonMoveMethodCreateWithoutPokemonMovesInput | undefined;

  @TypeGraphQL.Field(_type => PokemonMoveMethodCreateOrConnectWithoutPokemonMovesInput, {
    nullable: true
  })
  connectOrCreate?: PokemonMoveMethodCreateOrConnectWithoutPokemonMovesInput | undefined;

  @TypeGraphQL.Field(_type => PokemonMoveMethodWhereUniqueInput, {
    nullable: true
  })
  connect?: PokemonMoveMethodWhereUniqueInput | undefined;
}
