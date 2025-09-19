import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonFormUpdateOneRequiredWithoutGenerationsNestedInput } from "../inputs/PokemonFormUpdateOneRequiredWithoutGenerationsNestedInput";

@TypeGraphQL.InputType("PokemonFormGenerationUpdateWithoutGenerationInput", {})
export class PokemonFormGenerationUpdateWithoutGenerationInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  game_index?: number | undefined;

  @TypeGraphQL.Field(_type => PokemonFormUpdateOneRequiredWithoutGenerationsNestedInput, {
    nullable: true
  })
  pokemonForm?: PokemonFormUpdateOneRequiredWithoutGenerationsNestedInput | undefined;
}
