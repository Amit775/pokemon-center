import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonCreateOrConnectWithoutMovesInput } from "../inputs/PokemonCreateOrConnectWithoutMovesInput";
import { PokemonCreateWithoutMovesInput } from "../inputs/PokemonCreateWithoutMovesInput";
import { PokemonWhereUniqueInput } from "../inputs/PokemonWhereUniqueInput";

@TypeGraphQL.InputType("PokemonCreateNestedOneWithoutMovesInput", {})
export class PokemonCreateNestedOneWithoutMovesInput {
  @TypeGraphQL.Field(_type => PokemonCreateWithoutMovesInput, {
    nullable: true
  })
  create?: PokemonCreateWithoutMovesInput | undefined;

  @TypeGraphQL.Field(_type => PokemonCreateOrConnectWithoutMovesInput, {
    nullable: true
  })
  connectOrCreate?: PokemonCreateOrConnectWithoutMovesInput | undefined;

  @TypeGraphQL.Field(_type => PokemonWhereUniqueInput, {
    nullable: true
  })
  connect?: PokemonWhereUniqueInput | undefined;
}
