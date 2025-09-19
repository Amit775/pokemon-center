import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenerationUpdateOneRequiredWithoutPokemonFormGenerationsNestedInput } from "../inputs/GenerationUpdateOneRequiredWithoutPokemonFormGenerationsNestedInput";

@TypeGraphQL.InputType("PokemonFormGenerationUpdateWithoutPokemonFormInput", {})
export class PokemonFormGenerationUpdateWithoutPokemonFormInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  game_index?: number | undefined;

  @TypeGraphQL.Field(_type => GenerationUpdateOneRequiredWithoutPokemonFormGenerationsNestedInput, {
    nullable: true
  })
  generation?: GenerationUpdateOneRequiredWithoutPokemonFormGenerationsNestedInput | undefined;
}
