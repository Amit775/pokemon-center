import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionsCreateNestedOneWithoutPokemonGameIndicesInput } from "../inputs/VersionsCreateNestedOneWithoutPokemonGameIndicesInput";

@TypeGraphQL.InputType("PokemonGameIndicesCreateWithoutPokemonInput", {})
export class PokemonGameIndicesCreateWithoutPokemonInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  game_index!: number;

  @TypeGraphQL.Field(_type => VersionsCreateNestedOneWithoutPokemonGameIndicesInput, {
    nullable: false
  })
  version!: VersionsCreateNestedOneWithoutPokemonGameIndicesInput;
}
