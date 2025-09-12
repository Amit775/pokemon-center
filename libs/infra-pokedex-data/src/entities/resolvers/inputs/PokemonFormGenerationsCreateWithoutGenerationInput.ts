import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonFormsCreateNestedOneWithoutGenerationsInput } from "../inputs/PokemonFormsCreateNestedOneWithoutGenerationsInput";

@TypeGraphQL.InputType("PokemonFormGenerationsCreateWithoutGenerationInput", {})
export class PokemonFormGenerationsCreateWithoutGenerationInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  game_index!: number;

  @TypeGraphQL.Field(_type => PokemonFormsCreateNestedOneWithoutGenerationsInput, {
    nullable: false
  })
  pokemonForm!: PokemonFormsCreateNestedOneWithoutGenerationsInput;
}
