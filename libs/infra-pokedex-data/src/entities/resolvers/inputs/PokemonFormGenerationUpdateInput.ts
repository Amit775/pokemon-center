import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenerationUpdateOneRequiredWithoutPokemonFormGenerationsNestedInput } from "../inputs/GenerationUpdateOneRequiredWithoutPokemonFormGenerationsNestedInput";
import { PokemonFormUpdateOneRequiredWithoutGenerationsNestedInput } from "../inputs/PokemonFormUpdateOneRequiredWithoutGenerationsNestedInput";

@TypeGraphQL.InputType("PokemonFormGenerationUpdateInput", {})
export class PokemonFormGenerationUpdateInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  game_index?: number | undefined;

  @TypeGraphQL.Field(_type => PokemonFormUpdateOneRequiredWithoutGenerationsNestedInput, {
    nullable: true
  })
  pokemonForm?: PokemonFormUpdateOneRequiredWithoutGenerationsNestedInput | undefined;

  @TypeGraphQL.Field(_type => GenerationUpdateOneRequiredWithoutPokemonFormGenerationsNestedInput, {
    nullable: true
  })
  generation?: GenerationUpdateOneRequiredWithoutPokemonFormGenerationsNestedInput | undefined;
}
