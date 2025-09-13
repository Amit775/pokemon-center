import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenerationsCreateNestedOneWithoutPokemonFormGenerationsInput } from "../inputs/GenerationsCreateNestedOneWithoutPokemonFormGenerationsInput";
import { PokemonFormsCreateNestedOneWithoutGenerationsInput } from "../inputs/PokemonFormsCreateNestedOneWithoutGenerationsInput";

@TypeGraphQL.InputType("PokemonFormGenerationsCreateInput", {})
export class PokemonFormGenerationsCreateInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  game_index!: number;

  @TypeGraphQL.Field(_type => PokemonFormsCreateNestedOneWithoutGenerationsInput, {
    nullable: false
  })
  pokemonForm!: PokemonFormsCreateNestedOneWithoutGenerationsInput;

  @TypeGraphQL.Field(_type => GenerationsCreateNestedOneWithoutPokemonFormGenerationsInput, {
    nullable: false
  })
  generation!: GenerationsCreateNestedOneWithoutPokemonFormGenerationsInput;
}
