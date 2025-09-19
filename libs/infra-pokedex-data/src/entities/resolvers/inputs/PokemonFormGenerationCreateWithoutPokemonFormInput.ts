import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenerationCreateNestedOneWithoutPokemonFormGenerationsInput } from "../inputs/GenerationCreateNestedOneWithoutPokemonFormGenerationsInput";

@TypeGraphQL.InputType("PokemonFormGenerationCreateWithoutPokemonFormInput", {})
export class PokemonFormGenerationCreateWithoutPokemonFormInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  game_index!: number;

  @TypeGraphQL.Field(_type => GenerationCreateNestedOneWithoutPokemonFormGenerationsInput, {
    nullable: false
  })
  generation!: GenerationCreateNestedOneWithoutPokemonFormGenerationsInput;
}
