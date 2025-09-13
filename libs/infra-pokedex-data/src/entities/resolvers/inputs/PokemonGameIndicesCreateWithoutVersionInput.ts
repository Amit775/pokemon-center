import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonCreateNestedOneWithoutGameIndicesInput } from "../inputs/PokemonCreateNestedOneWithoutGameIndicesInput";

@TypeGraphQL.InputType("PokemonGameIndicesCreateWithoutVersionInput", {})
export class PokemonGameIndicesCreateWithoutVersionInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  game_index!: number;

  @TypeGraphQL.Field(_type => PokemonCreateNestedOneWithoutGameIndicesInput, {
    nullable: false
  })
  pokemon!: PokemonCreateNestedOneWithoutGameIndicesInput;
}
