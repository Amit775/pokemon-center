import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonFormCreateNestedOneWithoutGenerationsInput } from "../inputs/PokemonFormCreateNestedOneWithoutGenerationsInput";

@TypeGraphQL.InputType("PokemonFormGenerationCreateWithoutGenerationInput", {})
export class PokemonFormGenerationCreateWithoutGenerationInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  game_index!: number;

  @TypeGraphQL.Field(_type => PokemonFormCreateNestedOneWithoutGenerationsInput, {
    nullable: false
  })
  pokemonForm!: PokemonFormCreateNestedOneWithoutGenerationsInput;
}
