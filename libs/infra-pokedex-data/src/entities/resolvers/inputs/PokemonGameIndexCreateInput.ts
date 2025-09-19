import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonCreateNestedOneWithoutGameIndicesInput } from "../inputs/PokemonCreateNestedOneWithoutGameIndicesInput";
import { VersionCreateNestedOneWithoutPokemonGameIndicesInput } from "../inputs/VersionCreateNestedOneWithoutPokemonGameIndicesInput";

@TypeGraphQL.InputType("PokemonGameIndexCreateInput", {})
export class PokemonGameIndexCreateInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  game_index!: number;

  @TypeGraphQL.Field(_type => PokemonCreateNestedOneWithoutGameIndicesInput, {
    nullable: false
  })
  pokemon!: PokemonCreateNestedOneWithoutGameIndicesInput;

  @TypeGraphQL.Field(_type => VersionCreateNestedOneWithoutPokemonGameIndicesInput, {
    nullable: false
  })
  version!: VersionCreateNestedOneWithoutPokemonGameIndicesInput;
}
