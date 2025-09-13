import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovesCreateOrConnectWithoutPokemonMovesInput } from "../inputs/MovesCreateOrConnectWithoutPokemonMovesInput";
import { MovesCreateWithoutPokemonMovesInput } from "../inputs/MovesCreateWithoutPokemonMovesInput";
import { MovesWhereUniqueInput } from "../inputs/MovesWhereUniqueInput";

@TypeGraphQL.InputType("MovesCreateNestedOneWithoutPokemonMovesInput", {})
export class MovesCreateNestedOneWithoutPokemonMovesInput {
  @TypeGraphQL.Field(_type => MovesCreateWithoutPokemonMovesInput, {
    nullable: true
  })
  create?: MovesCreateWithoutPokemonMovesInput | undefined;

  @TypeGraphQL.Field(_type => MovesCreateOrConnectWithoutPokemonMovesInput, {
    nullable: true
  })
  connectOrCreate?: MovesCreateOrConnectWithoutPokemonMovesInput | undefined;

  @TypeGraphQL.Field(_type => MovesWhereUniqueInput, {
    nullable: true
  })
  connect?: MovesWhereUniqueInput | undefined;
}
