import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenerationsCreateNestedOneWithoutPokemonFormGenerationsInput } from "../inputs/GenerationsCreateNestedOneWithoutPokemonFormGenerationsInput";

@TypeGraphQL.InputType("PokemonFormGenerationsCreateWithoutPokemonFormInput", {})
export class PokemonFormGenerationsCreateWithoutPokemonFormInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  game_index!: number;

  @TypeGraphQL.Field(_type => GenerationsCreateNestedOneWithoutPokemonFormGenerationsInput, {
    nullable: false
  })
  generation!: GenerationsCreateNestedOneWithoutPokemonFormGenerationsInput;
}
